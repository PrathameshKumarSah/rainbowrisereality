import React from 'react'
import { Link } from 'react-router-dom'
// import Inquiry from '../components/InquiryBox'
import { ArrowRight } from 'lucide-react'
import Homev from '../assets/vack.mp4' // Import your video file
import HeroSearchBar from './HeroSearchBar'
const Hero = () => {
  return (
    <section className='w-full'>
      {/* < Inquiry/> */}
      <div className='relative w-full h-[685px]'>
        {/* Background video */}
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={Homev}
          autoPlay
          loop
          muted
        />
        {/* Content overlay */}
        <div className='relative top-52 px-4 sm:pl-10 z-10'>
          <span className='medium-18 text-white'>Welcome to Rainbow Rise Realty</span>
          <div className="items-center justify-center overflow-y-hidden overflow-x-hidden mt-4">
            <div className="w-max">
              <h1 className="animate-typing overflow-hidden whitespace-nowrap border-r-4 h1 capitalize text-white pr-5 text-2xl font-bold">
                Next Home with Rainbow <br /> Rise Realty
              </h1>
            </div>
          </div>
          <p className='my-10 max-w-[33rem] text-white'>
            Luxury, comfort, and convenience—properties that match your lifestyle. Invest in your future with properties designed to inspire and grow.
          </p>
          {/* button */}
          <HeroSearchBar />
        </div>
        {/* Overlay to dim video for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
      </div>
    </section>
  )
}
export default Hero
