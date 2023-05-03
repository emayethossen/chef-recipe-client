import React, { lazy, Suspense } from 'react';
import { FcLike } from 'react-icons/fc';
import { Link, useLoaderData, useParams } from 'react-router-dom'

const RecipeItems = lazy(() => wait(1000).then(() => import('../RecipeItems/RecipeItems')))

const ChefRecipe = () => {

    const { id } = useParams()
    const chefDetails = useLoaderData()
    console.log(chefDetails.recipes);
    const { name, picture, bio, experience_years, likes_count,recipes_count, recipes } = chefDetails
    return (
        <div>
            <div className="lg:grid grid-cols-2 justify-center items-center lg:w-3/4 mx-auto my-10 bg-base-100 shadow-xl">
                <figure><img className='rounded lg:ml-4' src={picture} alt={name} /></figure>
                <div className="card-body">
                    <h2 className="text-2xl font-bold">{name}</h2>
                    <p className='text-justify'>{bio}</p>
                    <p className='font-semibold '>Experience: {experience_years}years</p>
                    <p className='font-semibold '>Number of recipes: {recipes_count}</p>
                    <div className='flex'>
                    <button><FcLike className='text-xl' /></button>
                    <p className='font-semibold '> {likes_count}</p>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-3xl font-bold text-center'>World Best Recipes</h2>
                <div className='w-3/4 mx-auto my-10 lg:space-y-0 space-y-6 lg:grid grid-cols-3 gap-6'>
                    {recipes.map(recipe => <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-medium"> Processing... </span>
                </button>
            </div>}><RecipeItems key={recipe.id} recipe={recipe} /></Suspense>)}
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