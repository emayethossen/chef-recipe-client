import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            <div className='bg-red-100 py-10 space-y-6'>
            <div className='flex justify-center items-center space-x-6 text-3xl '>
                <FaFacebook className='text-sky-600' />
                <FaInstagram className='text-pink-500' />
                <FaTwitter className='text-sky-500' />
                <FaLinkedin className='text-blue-700' />
            </div>
            <div className='flex justify-center items-center lg:space-x-6 space-x-2 lg:text-lg font-bold'>
                <Link to='/' >Home</Link>
                <Link to='/blog' >Blog</Link>
                <Link to='/about' >About</Link>
                <Link to='/contact' >Contact</Link>
                <Link to='/location' >Location</Link>
            </div>
            <div className='flex justify-center items-center lg:space-x-6 space-x-2 text-sm font-semibold'>
                <Link to='/contact' >Contact</Link>
                <p>|</p>
                <Link to='/blog' >Blog</Link>
                <p>|</p>
                <Link to='/delivery' >Delivery</Link>
                <p>|</p>
                <Link to='/story' >Story</Link>
                <p>|</p>
                <Link to='/location' >Location</Link>
            </div>
        </div>
        <div className='bg-gray-300 py-8 space-y-4'>
            <h2 className='uppercase text-center lg:text-2xl text-lg font-bold text-gray-600'>Healthy fast casual food crafted with in <span className='text-white text-2xl'>♡</span> emayet hossen </h2>
            <p className='uppercase text-center lg:text-lg font-semibold text-slate-700'>&copy;Agra culture citchen & press || All right reserved</p>
        </div>
        </div>
    );
};

export default Footer;