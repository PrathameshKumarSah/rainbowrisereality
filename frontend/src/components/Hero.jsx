import React from 'react'
import { Link } from 'react-router-dom'
// import Inquiry from '../components/InquiryBox'
import { ArrowRight } from 'lucide-react'
import VideoSource from '../assets/vack.mp4' // Import your video file

const Hero = () => {
  return (
    <section className='w-full'>
      {/* < Inquiry/> */}
      <div className='relative w-full h-[685px]'>
        {/* Background video */}
        <video
          className='absolute top-0 left-0 w-full h-full object-cover'
          src={VideoSource}
          autoPlay
          loop
          muted
        />
        {/* Content overlay */}
        <div className='relative top-52 pl-5 sm:pl-10 z-10'>
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
          {/* Button */}
          <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
            <div className='text-center regular-14 leading-tight pl-5'>
              <h5 className='uppercase font-bold'>Best Deals!</h5>
              <p className='regular-14'>On All Properties</p>
            </div>
            <Link to={'/properties'} className='group btn-secondary rounded-xl text-lg flexCenter !py-4 transition-all hover:bg-blue-950'>
              <span>View</span>
              <ArrowRight size={20} className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300' />
            </Link>
          </div>
        </div>
        {/* Overlay to dim video for better text contrast */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 z-0"></div>
      </div>
    </section>
  )
}

export default Hero
