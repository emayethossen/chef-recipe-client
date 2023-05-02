import React, { useEffect, useState } from 'react';
import ggg from '../../assets/img3.jpg'
import ChefCard from '../ChefCard/ChefCard';
import Recipe from '../Recipe/Recipe';
import SugarRec from '../SugarRes/SugarRec';
const Home = () => {

    const [chefs, setChefs] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/chefs')
            .then(res => res.json())
            .then(data => setChefs(data))
            .catch(error => console.error(error))
    }, [])

    return (
        <div className='w-full'>
            <div style={{ backgroundImage: `url(${ggg})`, backgroundSize: 'cover', height: '100vh' }} className='grid grid-cols-2 gap-5 bg-no-repeat'>
                <div>
                    <h2 className='text-5xl font-bold'>Let's Start Cooking With Popular Recipes</h2>
                    <p>Want to learn cook but confused, how to start? <br /> No need to worry again!!!</p>
                    <button className="btn btn-info mr-6">Get Start</button>
                    <button className="btn btn-error">Explore More</button>
                </div>
                <div>
                    <div className="carousel w-full">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src="/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">❮</a>
                                <a href="#slide2" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={ggg} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">❮</a>
                                <a href="#slide3" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src="/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">❮</a>
                                <a href="#slide4" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src="/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">❮</a>
                                <a href="#slide1" className="btn btn-circle">❯</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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