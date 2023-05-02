import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import fb from '../../assets/fb.png'

const Register = () => {
    return (
        <div className='border lg:w-1/2 p-4 w-full mx-auto lg:p-14 lg:my-10 rounded'>
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
                <div className='w-2/5 h-0 border border-red-500'></div>
                <div>or</div>
                <div className='w-2/5 h-0 border border-red-500'></div>
            </div>
            <div className='text-center space-y-4'>
                <button className="btn btn-outline"><img className='w-5 mr-6' src={google} alt="" /> Continue With Google</button><br />
                <button className="btn btn-outline"><img className='w-6 mr-2' src={fb} alt="" /> Continue With Facebook</button>
            </div>
        </div>
    );
};

export default Register;