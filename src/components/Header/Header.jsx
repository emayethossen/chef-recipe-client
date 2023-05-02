import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {

    const { user,logOut } = useContext(AuthContext)
const handleLogOut=()=>{
    logOut()
    .then()
    .catch(error=>{
        console.log(error);
    })
}
    return (
        <div className='bg-red-100'>
            <div className='flex justify-between items-center w-3/4 mx-auto py-8 text-gray-600'>
                <h2 className='text-4xl font-bold'>EMAYET HOSSEN</h2>
                <div className='space-x-6 font-semibold'>
                    <Link to='/' >Home</Link>
                    <Link to='/blog' >Blog</Link>
                    <Link to='/about' >About</Link>
                    <Link to='/contact' >Contact</Link>
                </div>
                <div className='flex justify-center'>
                {user && <button  title={user.displayName} className='mr-2 text-xl'><FaUserCircle /></button>}
                    {user ?
                        <button onClick={handleLogOut}>Logout</button> :
                        <Link to='/login' >Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;