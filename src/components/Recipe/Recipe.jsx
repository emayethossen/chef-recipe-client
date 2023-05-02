import React from 'react';
import img1 from '../../assets/special-recipe-img/istockphoto-1329587431-170667a.jpg'
import img2 from '../../assets/special-recipe-img/istockphoto-1368384293-170667a.jpg'
import img3 from '../../assets/special-recipe-img/istockphoto-1393730758-170667a.jpg'
import img4 from '../../assets/special-recipe-img/istockphoto-1396093498-170667a.jpg'

const Recipe = () => {
    return (
        <div className='w-full text-center'>
            <h2 className='text-center text-3xl font-bold mt-10'>Our Special Recipes</h2>
            <p className='font-semibold my-4 px-4 text-center'>Excepteur sint occaecat cupidatat non qui proident, sunt culpa qui officia deserunmollit anim id est laborum.</p>
            <div className='lg:flex gap-6 lg:space-y-0 space-y-6 my-8 w-3/4 mx-auto'>

                <div style={{ backgroundImage: `url(${img1})` }} className="card w-full h-80 relative text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title bottom uppercase font-bold">Cake</h2>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${img2})` }} className="card lg:my-0 w-full h-80 relative text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title bottom uppercase font-bold">Pizza</h2>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${img3})` }} className="card w-full h-80 relative text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title bottom uppercase font-bold">Juice</h2>
                    </div>
                </div>

                <div style={{ backgroundImage: `url(${img4})` }} className="card w-full h-80 relative text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title bottom uppercase font-bold">Special Cake</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;