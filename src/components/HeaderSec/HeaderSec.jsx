import React from 'react';
import Lottie from 'lottie-react';
import cooking from '../../assets/cooking.json';
import SliderText from '../SliderText/SliderText';

const HeaderSec = () => {
    return (
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
    );
};

export default HeaderSec;