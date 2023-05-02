import React, { useEffect, useState, lazy, Suspense } from 'react';
import ggg from '../../assets/img3.jpg'
import Recipe from '../Recipe/Recipe';
import SugarRec from '../SugarRes/SugarRec';
import Slider from '../Slider/Slider';
import SliderText from '../SliderText/sliderText';

const ChefCard = lazy(() => wait(1000).then(() => import('../ChefCard/ChefCard')))

const Home = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        // fetch('http://localhost:3000/chefs')
        fetch(' https://chef-recipe-hunter-server-emayethossen.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='w-full'>
            <div style={{ backgroundImage: `linear-gradient(to right, #0037ffad, #0037ff40),url(${ggg})`, height: '100vh' }} className='bg-no-repeat w-full h-full bg-cover lg:mb-0 mb-36'>
                <div className='lg:grid grid-cols-2 gap-5 justify-center items-center h-screen w-5/6 mx-auto'>
                    <SliderText />
                    <Slider />
                </div>
            </div>

            <div className='w-10/12 mx-auto'>
                <h1 className='text-center text-3xl font-bold my-10'>
                    Our Top Chefs
                </h1>
                <div className='grid lg:grid-cols-3 gap-6'>
                    {
                        chefs.map(chef => <Suspense fallback={<h2>Loading...</h2>}><ChefCard key={chef.id} chef={chef} /></Suspense>)
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

function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
}

export default Home;