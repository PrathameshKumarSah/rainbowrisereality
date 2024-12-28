import React from 'react'
import { Link } from 'react-router-dom'
// import Inquiry from '../components/InquiryBox'
import { ArrowRight } from 'lucide-react'
import Heroback from '../assets/bgu.png'
import Heroback1 from '../assets/bug1.png'
import Heroback2 from '../assets/bug4.png'
import Heroback3 from '../assets/bug5.png'
import Heroback4 from '../assets/bug6.png'

const Hero = () => {

    const images = [
        Heroback, // Replace with actual image URLs or paths
        Heroback1,
        Heroback2,
        Heroback3,
        Heroback4,
    ];

    const [currentImage, setCurrentImage] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        }, 2000); // 3-second delay

        return () => clearInterval(interval);
    }, [images.length]);

  return (
   <section className='w-full'>
    {/* < Inquiry/> */}
    <div className='bg-cover bg-center px-4 h-[685px] w-full transition-all duration-1000' style={{ backgroundImage: `url(${images[currentImage]})` }}>
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
