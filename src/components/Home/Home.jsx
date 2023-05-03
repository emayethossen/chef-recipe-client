import React, { useEffect, useState, lazy, Suspense } from 'react';

const HeaderSec = lazy(() => wait(1000).then(() => import('../HeaderSec/HeaderSec')))
const ChefCard = lazy(() => wait(8000).then(() => import('../ChefCard/ChefCard')))
const Recipe = lazy(() => wait(2000).then(() => import('../Recipe/Recipe')))
const SugarRec = lazy(() => wait(3000).then(() => import('../SugarRes/SugarRec')))

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

            {/* This is Header Section */}
            <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                    <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span className="font-medium"> Processing... </span>
                </button>
            </div>}>
                <HeaderSec />
            </Suspense>

            {/* This Is Chefs Section */}
            
                <div className='w-10/12 mx-auto'>
                    <h1 className='text-center text-3xl font-bold my-10'>
                        Our Top Chefs
                    </h1>
                    <div className='grid lg:grid-cols-3 gap-6'>
                        {
                            chefs.map(chef => <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                            <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                                <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                <span className="font-medium"> Processing... </span>
                            </button>
                        </div>}><ChefCard key={chef.id} chef={chef} /></Suspense>)
                        }
                    </div>
                </div>
            
            {/* Recipe SecTion */}
            <div>
                <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                    <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                        <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-medium"> Processing... </span>
                    </button>
                </div>}>
                    <Recipe />
                </Suspense>
            </div>
            {/* Low Sugar Section */}
            <div>
                <Suspense fallback={<div className="flex h-screen w-screen items-center justify-center">
                    <button type="button" className="flex items-center rounded-lg bg-sky-500 px-4 py-2 text-white" disabled>
                        <svg className="mr-3 h-5 w-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <span className="font-medium"> Processing... </span>
                    </button>
                </div>}>
                    <SugarRec />
                </Suspense>
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