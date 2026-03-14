import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { getInstallApp } from '../../utility/addToDB';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const InstallApps = () => {
    const [installApps, setInstallApps] = useState([]);
    const allApps = useLoaderData();

    useEffect(() => {
        const storedApps = getInstallApp();
        const storedAppsInt = storedApps.map(id => parseInt(id));
        const installedApps = allApps.filter(app => storedAppsInt.includes(app.id));
        setInstallApps(installedApps);
    }, [allApps])


    return (
        <div className='bg-[#f1f1f1] pt-7 pb-10 md:py-15 flex flex-col justify-center space-y-1 px-5 md:px-25'>
            <h2 className='font-bold text-4xl text-center '>Your Installed Apps</h2>
            <p className='text-[0.9rem] px-8 text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='pt-3'>
                {
                    installApps.map(app =>
                        <div className='flex bg-white rounded-md gap-2 mt-1.5 px-2 py-1 items-center'>
                            <div>
                                <img src={app.image} alt="" className='h-10 rounded-md' />
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
                    )
                }
            </div>
        </div>
    );
};

export default InstallApps;