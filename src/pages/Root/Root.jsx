import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    const navigation = useNavigation();
    const isLoading = (navigation.state !== 'idle');
    return (
        <div className='min-h-screen flex flex-col'>
            <NavBar></NavBar>


            <main className='flex-1 bg-[#f1f1f1]'>
                {isLoading ?
                    <div className='flex justify-center items-center'>
                        <span class="loading loading-infinity loading-xl"></span>
                    </div> 
                    : <Outlet></Outlet>
                }
            </main>

            <Footer></Footer>
        </div>
    );
};

export default Root;