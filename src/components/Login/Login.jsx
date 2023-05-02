import React from 'react';
import { Link } from 'react-router-dom';
import google from '../../assets/google.png'
import fb from '../../assets/fb.png'

const Login = () => {
    return (
        <div className='border w-1/2 mx-auto p-14 my-10 rounded'>
            <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Login</h2>
            <form className="form-control">
                <input type="text" placeholder="Enter your email" className="input rounded-none bg-gray-100 w-full" />
                <input type="text" placeholder="Enter your password" className="input w-full rounded-none bg-gray-100 mt-6" />
                <p className='text-red-300 my-2'><Link to='/register'>Forget Password?</Link></p>
                <input type="submit" value='Login' className="input bg-red-200 font-semibold w-full" />
                <p className='mt-2 text-center'>Don't have an account?<Link className='text-red-300 underline' to='/register'> Sign Up</Link></p>
            </form>
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

export default Login;