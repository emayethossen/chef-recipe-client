import React from 'react';

const RecipeItems = ({ recipe }) => {

    const { name, image, price, rating } = recipe

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
                        <button className="btn btn-primary">Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeItems;