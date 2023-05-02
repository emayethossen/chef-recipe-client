import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Register = () => {
    return (
        <div className='lg:border lg:w-1/2 p-6 w-full mx-auto lg:p-14 lg:my-10 rounded'>
            <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Register</h2>
            <div className="form-control">
                <input type="text" name='name' placeholder="Enter your name" className="input rounded-none bg-gray-100 w-full" />
                <input type="text" name='photo' placeholder="Enter your photo url" className="input rounded-none bg-gray-100 w-full my-6" />
                <input type="text" name='email' placeholder="Enter your email" className="input rounded-none bg-gray-100 w-full" />
                <input type="password" name='password' placeholder="Password" className="input w-full rounded-none bg-gray-100 my-6" />
                <input type="password" name='confirm' placeholder="Confirrm password" className="input w-full rounded-none bg-gray-100 mb-6" />
                <input type="submit" value='Sign Up' className="input bg-red-200 text-xl font-bold w-full" />
                <p className='mt-2 text-center'>Already have an account?<Link className='text-red-300 underline' to='/login'> Login</Link></p>
            </div>
            <div className='my-6 w-4/5 mx-auto flex items-center justify-between'>
                <div className='w-2/5 h-0 border border-red-400'></div>
                <div>or</div>
                <div className='w-2/5 h-0 border border-red-400'></div>
            </div>
            <div className='text-center space-y-4'>
                <button className="btn btn-outline"><FaGoogle className='text-pink-500 mr-4 text-xl'/> Continue With Google</button><br />
                <button className="btn btn-outline"><FaGithub className='text-gray-600 mr-5 text-xl' /> Continue With Github</button>
            </div>
        </div>
    );
};

export default Register;