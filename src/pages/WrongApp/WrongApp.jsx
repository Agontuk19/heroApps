import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Link, Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';
import notFoundImg from '/App-Error.png'

const WrongApp = () => {
    return (
        <div className=''>

            <div className='flex flex-col justify-center items-center py-10 space-y-1 md:space-y-2'>
                <img src={notFoundImg} alt="" className='h-50 md:h-70' />
                <h2 className='font-semibold text-3xl md:text-4xl'>OPPS!! APP NOT FOUND</h2>
                <p>The App you are requesting is not found on our system. Please try another app.</p>
                <Link to={'/'}>
                    <button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-3 py-1.5 rounded-md inter mt-2'>
                        <p>Go Back!</p>
                    </button>
                </Link>
            </div>

        </div>
    );
};

export default WrongApp;