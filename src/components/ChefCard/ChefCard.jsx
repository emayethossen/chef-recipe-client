import React from 'react';
import { Link } from 'react-router-dom';

const ChefCard = ({ chef }) => {
    const {id, name, picture, experience_years, recipes_count, likes_count, bio } = chef
    return (
        <div>
            <div className="card w-80 mx-auto bg-base-100 shadow-xl">
                <figure><img src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='text-justify'>{bio.length<165?<>{bio}</>:<>{bio.slice(0,165)}...</>}</p>
                    <div className="card-actions justify-center">
                        <Link to={`/chefrecipe/${id}`}><button className="btn btn-primary">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefCard;