import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './swiper.css';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { EffectCoverflow, Navigation } from 'swiper';

import slide_image_1 from './afrodyta.png';
import slide_image_2 from './apollo.png';
import slide_image_3 from './ares.png';
import slide_image_4 from './artemida.png';
import slide_image_5 from './kronos.png';

function Slider() {
  return (
    <div className="container">
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3.5,
        }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide><img src={slide_image_1} alt=""/></SwiperSlide>
        <SwiperSlide><img src={slide_image_2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slide_image_5} alt="" /></SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default Slider;