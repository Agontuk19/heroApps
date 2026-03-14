import React from 'react';
import { Link, NavLink } from 'react-router';
import { FaGithub } from "react-icons/fa";
import appLogo from '/logo.png';

const links = <>
    <NavLink className={({ isActive }) => isActive ? "bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]" : ""} to={'/'}> Home</NavLink>
    <NavLink className={({ isActive }) => isActive ? "bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]" : ""} to={'/allApps'}>Apps</NavLink>
    <NavLink className={({ isActive }) => isActive ? "bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]" : ""} to={'/installApps'}>Installation</NavLink>
</>

const NavBar = () => {
    return (
        <div className='flex justify-between items-center mr-5 md:mx-10 lg:mx-20 my-3'>
            <div className='flex items-center'>
                <div class="dropdown">
                    <div tabindex="0" role="button" class="btn btn-ghost md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabindex="-1"
                        class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to={'/'} className='flex items-center'>
                    <img src={appLogo} alt="" className='h-9 mr-1' />
                    <p className='font-bold text-xl inter bg-linear-to-br bg-clip-text text-transparent from-[#632EE3] to-[#9F62F2]'>HERO.IO</p>
                </Link>
            </div>
            <div className='gap-4 inter hidden md:flex'>
                {links}
            </div>
            <div>
                <NavLink to={'https://github.com/Agontuk19'}>
                    <button className='flex gap-1 items-center bg-linear-to-br from-[#632EE3] to-[#9F62F2] text-white px-3 py-1.5 rounded-md inter'>
                        <p><FaGithub></FaGithub></p>
                        <p>Contribute</p>
                    </button>
                </NavLink>
            </div>
        </div>
    );
};

export default NavBar;