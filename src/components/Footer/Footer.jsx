import React from 'react';
import logo from '/logo.png'

const Footer = () => {
    return (
        <div className='bg-[#001931] text-white'>
            <footer class="footer sm:footer-horizontal p-10">
                <aside>
                    <img src={logo} alt="" className='h-20' />
                    <p>
                        HERO.IO
                        <br />
                        Providing reliable tech since 2020
                    </p>
                </aside>
                <nav>
                    <h6 class="footer-title">Services</h6>
                    <a class="link link-hover">Branding</a>
                    <a class="link link-hover">Design</a>
                    <a class="link link-hover">Marketing</a>
                    <a class="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Company</h6>
                    <a class="link link-hover">About us</a>
                    <a class="link link-hover">Contact</a>
                    <a class="link link-hover">Jobs</a>
                    <a class="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 class="footer-title">Legal</h6>
                    <a class="link link-hover">Terms of use</a>
                    <a class="link link-hover">Privacy policy</a>
                    <a class="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <hr className='mx-5 md:mx-10'/>
            <div className='text-center text-[0.8rem]'>
                <p className='py-2'>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
            </div>
        </div>

    );
};

export default Footer;