import React from 'react';
import img1 from '../../assets/low-sugar-img/sug1.jpg'
import img2 from '../../assets/low-sugar-img/sug2.jpg'
import img3 from '../../assets/low-sugar-img/sug3.jpg'
import img4 from '../../assets/low-sugar-img/sug4jpg.jpg'
import img5 from '../../assets/low-sugar-img/sug5.jpg'
import img6 from '../../assets/low-sugar-img/sug6.jpg'


const SugarRec = () => {
    return (
        <div>
            <h2 className='text-center text-3xl font-bold mt-10'>Lower sugar recipes</h2>
            <p className='text-center lg:w-1/2 w-full mx-auto font-semibold my-4 px-4'>As we go about our hectic, busy days, it can be very easy to resort to a sugary snack midway through the afternoon to keep your energy levels elevated.</p>
            <div className='lg:grid grid-cols-3 gap-4 lg:space-y-0 space-y-6 my-8 lg:w-3/4 w-full mx-auto bg-gray-100 p-10 rounded'>
                <img className='w-full h-64 rounded' src={img1} alt="" />
                <img className='w-full h-64 rounded' src={img2} alt="" />
                <img className='w-full h-64 rounded' src={img3} alt="" />
                <img className='w-full h-64 rounded' src={img4} alt="" />
                <img className='w-full h-64 rounded' src={img5} alt="" />
                <img className='w-full h-64 rounded' src={img6} alt="" />
            </div>
        </div>
    );
};

export default SugarRec;