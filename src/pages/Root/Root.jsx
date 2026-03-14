import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar></NavBar>

            <main className='flex-1 bg-[#f1f1f1]'>
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Root;