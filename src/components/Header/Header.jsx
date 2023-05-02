import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-red-100'>
            <div className='flex justify-between items-center w-3/4 mx-auto py-8 text-gray-600'>
            <h2 className='text-4xl font-bold'>EMAYET HOSSEN</h2>
            <div className='space-x-6 font-semibold'>
            <Link to='/' >Home</Link>
            <Link to='/blog' >Blog</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/login' >Login</Link>
            </div>
        </div>
        </div>
    );
};

export default Header;