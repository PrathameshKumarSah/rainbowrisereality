import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {VscSettings} from "react-icons/vsc"
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay} from "swiper/modules"
import 'swiper/css'
import 'swiper/css/pagination'
import Item from './Item'
import {apiStore} from "../store/apiHandler.js"


const Properties = () => {
    const {properties, getProperties} = apiStore();

    useEffect(() => {
        getProperties();
      }, [])    
    
  return (
    <section className='max-padd-container '>
        <div className='max-padd-container bg-[#03346E]  py-16 xl:py-28 rounded-3xl  overflow-y-hidden'>
            <span className='medium-18 text-white'>Your Future Home Awaits! </span>
            <h2 className='h2 text-white'>Find Your Dream Here</h2>
            <div className='flexBetween mt-8 mb-6 text-white'>
                <h5><span className='font-bold '>Showing 1-9</span>out of 3k properties</h5>
                <Link to={'/'} className='color-white text-3xl rounded-md h-10 w-10'><VscSettings /></Link>
            </div>
            {/* container */}
            <Swiper autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }} breakpoints={{600: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1124: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1300: {
                slidesPerView: 4,
                spaceBetween: 30,
            },
            }}
            modules={[ Autoplay]}
            className='h-[488px] md:h-[533px] xl:h-[422px] mt-5'
            >
                {
                    properties.map((property)=> (
                        <SwiperSlide key={property.title}>
                         <Item property={property} /> 
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Properties