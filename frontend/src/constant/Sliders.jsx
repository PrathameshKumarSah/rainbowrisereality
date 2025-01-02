import React from 'react'
import { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import Suit1 from '../assets/suit1.png';
import Suit2 from '../assets/suit2.png';
import Suit3 from '../assets/suit3.png';
import Suit4 from '../assets/suit4.png';
import Suit5 from '../assets/suit5.png';
import Suit6 from '../assets/suit6.png';
import Suit7 from '../assets/suit7.png';
import Suit8 from '../assets/suit8.png';
import Suit9 from '../assets/suit9.png';
import Suit10 from '../assets/suit10.png';
import Suit11 from '../assets/suit11.png';
import Suit12 from '../assets/suit12.png';
import Suit13 from '../assets/suit13.png';
import Suit14 from '../assets/suit14.png';
import Suit15 from '../assets/suit15.png';
import Suit16 from '../assets/suit16.png';
import Suit17 from '../assets/suit17.png';
import Suit18 from '../assets/suit18.png';
import Suit19 from '../assets/suit19.png';
import Suit20 from '../assets/suit20.png';
import Suit21 from '../assets/suit21.png';

const Sliders = () => {

  const slides = [
    {
        url: Suit1
    },
    {
        url: Suit2
    },
    {
        url: Suit3
    },
    {
        url: Suit4
    },
    {
        url: Suit5
    },
    {
        url: Suit6
    },
    {
        url: Suit7
    },
    {
        url: Suit8
    },
    {
        url: Suit9
    },
    {
        url: Suit10
    },
    {
        url: Suit11
    },
    {
        url: Suit12
    },
    {
        url: Suit13
    },
    {
        url: Suit14
    },
    {
        url: Suit16
    },
    {
        url: Suit17
    },
    {
        url: Suit18
    },
    {
        url: Suit19
    },
    {
        url: Suit20
    },
    {
        url: Suit21
    },
    // {
    //     url: Suit22
    // },
    {
        url: Suit15
    },
];
const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    // Auto-slide functionality
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 2000); // 2-second delay

        return () => clearInterval(interval); // Cleanup the interval on unmount
    }, [currentIndex]);


  return (
    <div className=' max-w-[1200px] h-[500px] w-full m-auto py-16 px-4 relative group overflow-hidden'>
    <div
        className='w-full px-4 h-full object-contain rounded-2xl bg-center bg-cover duration-500 mb-20 '
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
    ></div>
    {/* Left Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
    </div>
    {/* Right Arrow */}
    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 group-hover:bg-black/20 text-white cursor-pointer'>
        <BsChevronCompactRight onClick={nextSlide} size={30} />
    </div>

    <div className='flex top-4 justify-center py-2'>
        {slides.map((slide, slideIndex) => (
            <div
                className='text-2xl cursor-pointer'
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
            >
                <RxDotFilled />
            </div>
        ))}
    </div>
    </div>
  )
}

export default Sliders
