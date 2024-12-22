import React from 'react'
import { Link } from 'react-router-dom'
import Inquiry from '../components/InquiryBox'
import { ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
   <section className='w-full'>
    {/* < Inquiry/> */}
    <div className='bg-hero bg-center bg-cover px-4 bg-no-repeat h-[685px] w-full '>
        <div className='relative top-52 pl-5 sm:pl-10'>
            <span className='medium-18 text-white'>Welcome to Rainbow Rise Realty</span>
            <h1 className='h1 capitalize max-w-[40rem] text-white'>Next Home with Rainbow Rise Realty</h1>
            <p className='my-10 max-w-[33rem] text-white'>Explore a curated selection of homes for sale or rent, easily filter by your desired features, and connect with a trusted real estate agent.</p>
             {/* button */}
             <div className='inline-flex items-center justify-center gap-4 p-2 bg-white rounded-xl'>
                <div className='text-center regular-14 leading-tight pl-5'>
                    <h5 className='uppercase font-bold'>Best Deals!</h5>
                    <p className='regular-14'>On All Properties</p>
                </div>
                <Link to={'/properties'} className='group btn-secondary rounded-xl text-lg flexCenter !py-4 transition-all hover:bg-blue-950'>
                    <span>View</span>
                    <ArrowRight size={20} className='ml-2 transform group-hover:translate-x-1 transition-transform duration-300'/>
                </Link>
             </div>
        </div>
    </div>
   </section>
  )
}

export default Hero