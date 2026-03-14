import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { uninstallFromDB } from '../../utility/addToDB';
import Swal from 'sweetalert2'

const InstallApp = ({ app, installApps, setInstallApps }) => {
    const handleUninstall = (id) => {
        const newInstall = installApps.filter(app => app.id != id);
        setInstallApps(newInstall);
        uninstallFromDB(id);
        Swal.fire({
            title: "App Uninstalled Succesfully!",
            icon: "success",
            draggable: true
        });
    }
    return (
        <div className='bg-white rounded-md mt-1.5 px-2 py-1 flex justify-between items-center gap-3'>
            <div className='flex gap-2 items-center'>
                <div>
                    <img src={app.image} alt="" className='h-10 w-10 rounded-md' />
                </div>
                <div>
                    <p className='text-[1rem]'>{app.title}</p>
                    <div className='flex gap-3 text-[0.9rem]'>
                        <div className='flex items-center text-[#00D390]'>
                            <p className='pt-0.5'><IoMdDownload></IoMdDownload></p>
                            <p>{app.downloads / 1000000}M</p>
                        </div>
                        <div className='flex items-center text-[#FF8811]'>
                            <p className='pb-0.5 text-[0.9rem] mr-0.5'><FaStar></FaStar></p>
                            <p>{app.ratingAvg}</p>
                        </div>
                        <div>
                            <p>{app.size}MB</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <button onClick={() => handleUninstall(app.id)} className='bg-[#00D390] text-white px-1.5 py-0.5 rounded-md'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstallApp;