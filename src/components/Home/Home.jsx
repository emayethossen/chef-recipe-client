import React, { useEffect, useState, lazy, Suspense } from 'react';
import ggg from '../../assets/banner.jpg'
import Recipe from '../Recipe/Recipe';
import SugarRec from '../SugarRes/SugarRec';
import Lottie from 'lottie-react';
import cooking from '../../assets/cooking.json';
import SliderText from '../SliderText/sliderText';

const ChefCard = lazy(() => wait(1000).then(() => import('../ChefCard/ChefCard')))

const Home = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('https://chef-recipe-hunter-server-emayethossen.vercel.app/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='w-full'>
            <div className='bg-gradient-to-r from-sky-600 to-sky-200'>

                <div className='flex flex-col lg:flex-row-reverse items-center md:flex-row lg:w-3/4 mx-auto pt-12 lg:pt-0 lg:pb-0 pb-16'>
                    <div className='relative order-first'>
                        <div className='w-full lg:w-4/5 lg:ml-auto -mt-16 lg:mt-16'>
                            <Lottie animationData={cooking} loop={true} />
                        </div>
                    </div>
                    <SliderText />
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