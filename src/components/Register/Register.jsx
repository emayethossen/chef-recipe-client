import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('')
    const { createUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value
        const photo = form.photo.value
        const email = form.email.value
        const password = form.password.value
        const confirm = form.confirm.value
        console.log(name, photo, email, password, confirm);
        setError('')
        if (password !== confirm) {
            setError('Your password did not match')
            return
        } else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add atleast one uppercase')
            return
        }
        else if (!/(?=.*[!@#$&*])/.test(password)) {
            setError('Please add atleast special characters')
            return
        }
        else if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return
        }
        createUser(email, password)
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                updateProfile(createdUser, {
                    displayName: name, photoURL: photo
                  })
                navigate('/')
                form.reset()
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate('/')
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const handleGithubSignIn = () => {
        githubSignIn()
            .then(result => {
                const createdUser = result.user
                console.log(createdUser);
                navigate('/')

            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    return (
        <div className='lg:border lg:w-1/2 p-6 w-full mx-auto lg:p-14 lg:my-10 rounded'>
            <h2 className='text-3xl mb-4 font-bold text-center uppercase'>Register</h2>
            <form onSubmit={handleRegister} className="form-control">
                <input type="text" name='name' placeholder="Enter your name" className="input rounded-none bg-gray-100 w-full" required />
                <input type="text" name='photo' placeholder="Enter your photo url" className="input rounded-none bg-gray-100 w-full my-6" required />
                <input type="text" name='email' placeholder="Enter your email" className="input rounded-none bg-gray-100 w-full" required />
                <input type="password" name='password' placeholder="Password" className="input w-full rounded-none bg-gray-100 my-6" required />
                <input type="password" name='confirm' placeholder="Confirrm password" className="input w-full rounded-none bg-gray-100" required />
                <p className='text-red-600 my-6'>{error}</p>
                <input type="submit" value='Sign Up' className="input bg-red-200 text-xl font-bold w-full" />
                <p className='mt-2 text-center'>Already have an account?<Link className='text-red-300 underline' to='/login'> Login</Link></p>
            </form>
            <div className='my-6 w-4/5 mx-auto flex items-center justify-between'>
                <div className='w-2/5 h-0 border border-red-400'></div>
                <div>or</div>
                <div className='w-2/5 h-0 border border-red-400'></div>
            </div>
            <div className='text-center space-y-4'>
                <button onClick={handleGoogleSignIn} className="btn btn-outline"><FaGoogle className='text-pink-500 mr-4 text-xl' /> Continue With Google</button><br />
                <button onClick={handleGithubSignIn} className="btn btn-outline"><FaGithub className='text-gray-600 mr-5 text-xl' /> Continue With Github</button>
            </div>
        </div>
    );
};

export default Register;