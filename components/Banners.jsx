'use client'
import React from 'react'
//Import Swiper React components
import{Swiper, SwiperSlide} from 'swiper/react'
import Link from 'next/link'


//Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const Banners = () => {
  return (
    <section className=' py-5 bg-white pt-0'>
        <div className="container">
            <Swiper
                slidesPerView={3}
                spaceBetween={25}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper"
            >
                <SwiperSlide >
                    <Link href="/" className='item group rounded-md overflow-hidden'>
                        <img src={"/banner1.png"} alt="banner" className='w-full transition group-hover:scale-105 rounded-md' />
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                    <Link href="/" className='item group rounded-md overflow-hidden'>
                        <img src={"/banner2.png"} alt="banner" className='w-full transition group-hover:scale-105 rounded-md' />
                    </Link>
                </SwiperSlide>

                <SwiperSlide >
                    <Link href="/" className='item group rounded-md overflow-hidden'>
                        <img src={"/banner3.png"} alt="banner" className='w-full transition group-hover:scale-105 rounded-md' />
                    </Link>
                </SwiperSlide>

                
            </Swiper>
        </div>
    </section>
  )
}

export default Banners
