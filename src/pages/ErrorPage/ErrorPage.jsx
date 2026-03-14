import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';
import errorImg from '/error-404.png';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center py-10 space-y-1 md:space-y-2'>
            <img src={errorImg} alt="" className='h-50 md:h-70' />
            <h2 className='font-semibold text-3xl md:text-4xl'>Oops, page not found!</h2>
            <p>The page you are looking for is not available.</p>
            <Link to={'/'}>
                <button className='bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-3 py-1.5 rounded-md inter mt-2'>
                    <p>Go Back!</p>
                </button>
            </Link>
        </div>
    );
};

export default ErrorPage;