import React from 'react';
import googlePlay from '/googlePlay.png';
import appStore from '/appStore.png';
import bannerPhoto from '/hero.png'

const Banner = () => {
    return (
        <div className='bg-[#f1f1f1] flex flex-col text-center justify-center items-center pt-5 md:pt-10'>
            <div className=''>
                <h1 className='text-4xl md:text-5xl inter font-extrabold text-[#001931] py-2'>We Build <br /><span className='bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>Productive</span> Apps</h1>
                <p className='py-2 mx-5 md:mx-25'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='flex gap-5 py-3 inter'>
                <button className='border border-gray-300 px-3 py-2 rounded-md flex gap-1.5 items-center hover:bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:text-white'>
                    <img src={googlePlay} alt="" className='h-4'/>
                    <p>Google Play</p>
                </button>
                <button className='border border-gray-300 px-3 py-2 rounded-md flex gap-1.5 items-center hover:bg-linear-to-br from-[#632EE3] to-[#9F62F2] hover:text-white'>
                    <img src={appStore} alt="" className='h-5'/>
                    <p>App Store</p>
                </button>
            </div>
            <div>
                <img src={bannerPhoto} alt="" className='h-50 md:h-80 pt-4'/>
            </div>
            <div className='bg-linear-to-br from-[#5f22ed] to-[#8341df] w-full py-10 text-white inter'>
                <h2 className='text-4xl font-semibold'>Trusted By Millions, Built For You</h2>
                <div className='flex flex-col md:flex-row gap-8 md:gap-30 justify-center items-center pt-8'>
                    <div className='space-y-1'>
                        <p className='text-[0.7rem]'>Total Downloads</p>
                        <p className='font-bold text-5xl'>29.6M</p>
                        <p className='text-[0.7rem]'>21% More Than Last Month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[0.7rem]'>Total Reviews</p>
                        <p className='font-bold text-5xl'>906K</p>
                        <p className='text-[0.7rem]'>46% more than last month</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[0.7rem]'>Active Apps</p>
                        <p className='font-bold text-5xl'>132+</p>
                        <p className='text-[0.7rem]'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;