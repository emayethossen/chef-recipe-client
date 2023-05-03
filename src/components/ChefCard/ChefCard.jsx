import React from 'react';
import { Link } from 'react-router-dom';
import { FcLike } from "react-icons/fc";

const ChefCard = ({ chef }) => {
    const {id, name, picture, experience_years, recipes_count, likes_count, bio } = chef
    return (
        <div>
            <div className="card  mx-auto bg-base-100 shadow-xl">
                <figure><img className='h-64 w-full' src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold '>Experience: {experience_years}years</p>
                    <p className='font-semibold '>Number of recipes: {recipes_count}</p>
                    <div className='flex'>
                    <button><FcLike className='text-xl' /></button>
                    <p className='font-semibold '> {likes_count}</p>
                    </div>
                    <p className='text-justify'><span className='font-semibold'>Description:</span> {bio.length<100?<>{bio}</>:<>{bio.slice(0,100)}...</>}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/chefrecipe/${id}`}><button className="btn bg-green-600 border-none">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;