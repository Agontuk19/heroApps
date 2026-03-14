import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { MdReviews } from "react-icons/md";
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import WrongApp from '../WrongApp/WrongApp';
import { addToInstallDB, getInstallApp } from '../../utility/addToDB';
import Swal from 'sweetalert2'

const AppDetails = () => {
    const { id } = useParams();
    const installedApps = getInstallApp();
    const [install, setInstall] = useState(installedApps.includes(id));
    const apps = useLoaderData();
    const app = apps.find(app => app.id === parseInt(id));
    if (!app) {
        return <WrongApp></WrongApp>
    }
    const { image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings } = app;


    const handleInstall = (id) => {
        if (!install) {
            setInstall(true);
            addToInstallDB(id);
            Swal.fire({
                title: "App Installed Succesfully!",
                icon: "success",
                draggable: true
            });
        }
    }
    return (
        <div className='px-5 md:px-10 lg:px-20 pt-10 inter bg-[#f1f1f1]'>
            <div className='flex flex-col md:flex-row w-full md:gap-5 xl:gap-7'>
                <div className='w-1/3 lg:w-1/4 xl:w-1/5'>
                    <img src={image} alt="" className='rounded-2xl md:h-60' />
                </div>
                <div className='md:space-y-2'>
                    <h2 className='font-bold text-3xl pt-5 md:pt-0'>{title}</h2>
                    <p className='pb-2 md-pb-0'>Developed by <span className='font-semibold bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>{companyName}</span></p>
                    <hr className='text-gray-400 w-full' />
                    <div className='flex gap-4 md:gap-10 pt-3 md:pt-1'>
                        <div className='md:space-y-0.5'>
                            <p><IoMdDownload className='text-[#00D390] text-4xl'></IoMdDownload></p>
                            <p className='text-[0.9rem]'>Downloads</p>
                            <p className='text-4xl font-semibold'>{downloads / 1000000}M</p>
                        </div>
                        <div className='md:space-y-0.5'>
                            <p><FaStar className='text-[#FF8811] text-4xl'></FaStar></p>
                            <p className='text-[0.9rem]'>Average Ratings</p>
                            <p className='text-4xl font-semibold'>{ratingAvg}</p>
                        </div>
                        <div className='md:space-y-0.5'>
                            <p><MdReviews className='text-[#632EE3] text-4xl'></MdReviews></p>
                            <p className='text-[0.9rem]'>Total Reviews</p>
                            <p className='text-4xl font-semibold'>{reviews / 1000}K</p>
                        </div>
                    </div>
                    <button
                        onClick={() => handleInstall(id)}
                        className={`px-3 py-2 rounded-md mt-2 font-semibold ${install === true ? 'disabled border-2 border-[#00D390] text-black' : "bg-[#00D390] text-white"}`}>
                        {
                            install === true ? "Installed" : `Install Now (${size} MB)`
                        }
                    </button>
                </div>
            </div>
            <hr className='text-gray-400 mt-5' />
            <div>
                <h2 className='font-bold text-gray-700 pt-5 pb-2'>Ratings</h2>
                <ResponsiveContainer width={'100%'} height={300}>
                    <BarChart data={[...ratings].reverse()} layout='vertical'>
                        <XAxis type='number' />
                        <YAxis type='category' dataKey='name' width={50} />
                        <Tooltip />
                        <Bar dataKey='count' fill='#FF8811' />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <hr className='text-gray-400 mt-5' />
            <div className='pb-10'>
                <h2 className='font-bold text-gray-700 pt-5 pb-1'>Description</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;