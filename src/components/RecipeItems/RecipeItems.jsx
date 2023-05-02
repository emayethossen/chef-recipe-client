import React, { useState } from 'react';
import Rating from 'react-rating';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaRegStar, FaStar } from 'react-icons/fa'

const RecipeItems = ({ recipe }) => {
    const [isDisable, setIsDisable] = useState(false)
    const { name, image, price, rating,method } = recipe
    const notify = () => {

        setIsDisable(true)
        return toast("Your Favourite Recipe Added !")
    };
    const order = () => toast("Ordered Successfully !");

    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img className='h-56 w-full' src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>
{method}
                    </p>
                    <div className='grid grid-cols-2'>
                        <div className='flex items-center justify-center'>
                            <Rating
                                placeholderRating={rating}
                                readonly
                                emptySymbol={<FaRegStar />}
                                placeholderSymbol={<FaStar className='text-warning' />}
                                fullSymbol={<FaStar />}
                            ></Rating>
                            <p className='font-bold ml-4 text-gray-500'>{rating}</p>
                        </div>
                        <p className='font-semibold text-right text-lg'>Price: ${price}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <button onClick={order} className="btn btn-primary">Order Now</button>
                        <button onClick={notify} disabled={isDisable} className="btn btn-primary">Favourite</button>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeItems;