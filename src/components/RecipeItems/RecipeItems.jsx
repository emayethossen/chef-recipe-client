import React from 'react';

const RecipeItems = ({ recipe }) => {

    const { name, image, price, rating } = recipe

    return (
        <div>
            <div className="card card-compact h-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <div className='flex justify-between'>
                    <p className='font-semibold text-lg'>Rating: {rating}</p>
                    <p className='font-semibold text-lg'>Price: {price}</p>
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