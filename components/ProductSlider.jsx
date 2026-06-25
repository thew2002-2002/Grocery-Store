'use client'
import React from 'react'
//Import Swiper React components
import{Swiper, SwiperSlide} from 'swiper/react'

//Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import { Navigation } from 'swiper/modules'

const ProductSlider = () => {
  return (
    <div className='productSlider'>
      <Swiper
        
        spaceBetween={30}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default ProductSlider
