import React, { lazy, Suspense } from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom'
// import RecipeItems from '../RecipeItems/RecipeItems';

const RecipeItems = lazy(() => wait(1000).then(() => import('../RecipeItems/RecipeItems')))

const ChefRecipe = () => {

    const { id } = useParams()
    const chefDetails = useLoaderData()
    console.log(chefDetails.recipes);
    const { name, picture, bio, experience_years, likes_count, recipes } = chefDetails
    return (
        <div>
            <div className="lg:grid grid-cols-2 justify-center items-center lg:w-3/4 mx-auto my-10 bg-base-100 shadow-xl">
                <figure><img src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className='text-justify'>{bio}</p>
                    <p><span className='font-semibold'>Total Likes:</span> {likes_count}</p>
                    <p><span className='font-semibold'>Experience:</span> {experience_years}</p>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-center'>World Best Recipes</h2>
                <div className='w-3/4 mx-auto my-10 lg:space-y-0 space-y-6 lg:grid grid-cols-3 gap-6'>
                    {recipes.map(recipe => <Suspense fallback={
                        <h2>Loading...</h2>
                    }><RecipeItems key={recipe.id} recipe={recipe} /></Suspense>)}
                </div>
            </div>
        </div>
    );
};

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default ChefRecipe;