import React, { useEffect, useState } from 'react';
import ggg from '../../assets/img3.jpg'
import ChefCard from '../ChefCard/ChefCard';
import Recipe from '../Recipe/Recipe';
import SugarRec from '../SugarRes/SugarRec';
import Slider from '../Slider/Slider';


const Home = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        // fetch(' https://chef-recipe-hunter-server-emayethossen.vercel.app/chefs')
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='w-full'>
            <div style={{ backgroundImage: `url(${ggg})`, backgroundSize: 'cover', height: '100vh' }} className='lg:grid grid-cols-2 gap-5 bg-no-repeat'>
                <div>
                    <h2 className='text-5xl font-bold'>Let's Start Cooking With Popular Recipes</h2>
                    <p>Want to learn cook but confused, how to start? <br /> No need to worry again!!!</p>
                    <button className="btn btn-info mr-6">Get Start</button>
                    <button className="btn btn-error">Explore More</button>
                </div>
                <div>
                </div>
            </div>
                <Slider />
            
            <div className='w-10/12 mx-auto'>
                <h1 className='text-center text-3xl font-bold my-10'>
                    All Chef
                </h1>
                <div className='grid lg:grid-cols-3 gap-6'>
                {
                    chefs.map(chef => <ChefCard key={chef.id} chef={chef} />)
                }
                </div>
            </div>
            <div>
                <Recipe />
            </div>
            <div>
                <SugarRec />
            </div>
        </div>
    );
};

export default Home;