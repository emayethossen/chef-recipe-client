import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import img1 from '../../assets/low-sugar-images/sug1.jpg'
import img2 from '../../assets/low-sugar-images/sug2.jpg'
import img3 from '../../assets/low-sugar-images/sug3.jpg'
import img4 from '../../assets/low-sugar-images/sug4jpg.jpg'
import img5 from '../../assets/low-sugar-images/sug5.jpg'
import img6 from '../../assets/low-sugar-images/sug6.jpg'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    return (
        // <div className='container'>
        //     <h1 className='text-center text-white text-3xl font-bold mb-10'>
        //             Our Trending Foods
        //         </h1>
        //     <Swiper
        //         effect={'coverflow'}
        //         grabCursor={true}
        //         centeredSlides={true}
        //         loop={true}
        //         spaceBetween={0}
        //         slidesPerView={'auto'}
        //         pagination={{ el: '.swiper-pagination', clickable: true }}
        //         navigation={{
        //             nextEl: '.swiper-button-next',
        //             prevEl: '.swiper-button-prev',
        //             clickable: true
        //         }}
        //         modules={[EffectCoverflow, Pagination, Navigation]}
        //         coverflowEffect={
        //             {
        //                 rotate: 0,
        //                 stretch: 0,
        //                 depth: 100,
        //                 modifier: 2.5
        //             }
        //         }
        //         className='swiper_container'
        //     >
        //         <SwiperSlide>
        //             <img className='rounded' src={img1} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img className='rounded' src={img2} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img className='rounded' src={img3} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img className='rounded' src={img4} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img className='rounded' src={img5} alt="slide_image" />
        //         </SwiperSlide>
        //         <SwiperSlide>
        //             <img className='rounded' src={img6} alt="slide_image" />
        //         </SwiperSlide>

        //         <div className="slider-controler">
        //             <div className="swiper-button-prev slider-arrow">
        //                 <FaArrowLeft className='arrow-back-outline' />
        //             </div>
        //             <div className="swiper-button-next slider-arrow">
        //                 <FaArrowRight className='arrow-forward-outline' />
        //             </div>
        //             <div className="swiper-pagination">

        //             </div>
        //         </div>

        //     </Swiper>
        // </div>
        <div className="h-64 carousel carousel-vertical rounded ">
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img1} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img2} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img3} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img4} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img5} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img6} />
  </div> 
  <div className="carousel-item h-full">
    <img className='rounded-lg' src={img5} />
  </div>
</div>
    );
};

export default Slider;