import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeItems = ({ recipe }) => {

    const { name, image, price, rating } = recipe
    const notify = () => toast("Your Favourite Recipe Added !");
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-56 w-full' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='grid grid-cols-2'>
                        <p className='font-semibold text-lg'>Rating: {rating}</p>
                        <p className='font-semibold text-right text-lg'>Price: {price}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">Order Now</button>
                        <button onClick={notify} className="btn btn-primary">Favourite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeItems;