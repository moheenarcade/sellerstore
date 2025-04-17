'use client';
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import Slide1 from "../../../../public/images/heroslide1.webp";
import Slide2 from "../../../../public/images/heroslide2.webp";
import Slide3 from "../../../../public/images/heroslide3.webp";
import { useLanguage } from '../../../context/LanguageContext';

const HeroSlider = () => {
    const swiperRef = useRef(null);
    const { language } = useLanguage();
    return (
        <div className="container hero-slider-main px-4 md:px-6 2xl:px-28 mx-auto" dir={language === 'ar' ? 'rtl' : 'ltr'}>
            <div className="relative"
                onMouseEnter={() => swiperRef.current?.swiper.autoplay.stop()}
                onMouseLeave={() => swiperRef.current?.swiper.autoplay.start()}
            >
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    loop
                    className="w-full h-[120px] md:h-[220px] lg:h-[280px] xl:h-[340px] rounded-xl"
                >
                    <SwiperSlide>
                        <div className="heroslide h-full" >
                            <Image className='w-full h-full rounded-xl' src={Slide1} alt='slide banner' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="heroslide h-full" >
                            <Image className='w-full h-full rounded-xl' src={Slide2} alt='slide banner' />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="heroslide h-full" >
                            <Image className='w-full h-full rounded-xl' src={Slide3} alt='slide banner' />
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default HeroSlider;
