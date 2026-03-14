import React from 'react';
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';

const App = ({ app }) => {
    return (
        <Link to={`/appDetails/${app.id}`} className='h-full' onClick={() => window.scrollTo(0,0)}>
            <div className='bg-white rounded-md p-3 h-full'>
                <img src={app.image} alt="" className='h-35 md:h-60 w-full rounded-md' />
                <p className='pt-2 text-lg'>{app.title}</p>
                <div className='flex justify-between items-center pt-1 text-[0.9rem]'>
                    <p className='flex items-center text-[#00D390] bg-[#F1F5E8] px-1.5 rounded-sm'>
                        <p className='pt-0.5'><IoMdDownload></IoMdDownload></p>
                        <p>{app.downloads / 1000000}M</p>
                    </p>
                    <p className='flex items-center gap-1 bg-[#FFF0E1] text-[#FF8811] px-1.5 rounded-sm'>
                        <p className='pb-0.5'><FaStar></FaStar></p>
                        <p>{app.ratingAvg}</p>
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default App;