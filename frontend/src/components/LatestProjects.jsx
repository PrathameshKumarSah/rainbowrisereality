import React from 'react'
import Spa from '../assets/ska.jpg'
import Sunshine from '../assets/god.jpg'
import Three from '../assets/page.jpg'

const LatestProjects = () => {
  return (
    <div>
        <h2 className=" max-padd-container mt-10 text-center text-4xl md:text-5xl font-extrabold text-[#000000] overflow-y-hidden mb-10">
        Our latest Projects
      </h2>
      <section className="max-padd-container container mx-auto p-6 mt-6">
        {/* Property 1: Rise Resort Residences */}
        <div className="flex flex-col md:flex-row items-center mb-12">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={Sunshine}
              alt="Rise Resort Residences"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-8 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              GODREJ
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Godrej Properties Noida is a prestigious real estate development offering modern homes with world-class amenities and sustainable designs. Located in prime areas of Noida, these properties blend luxury, comfort, and innovation. With a reputation for quality and timely delivery, Godrej Properties ensures an exceptional lifestyle in one of India's fastest-growing cities.
            </p>
            
          </div>
        </div>
       
        {/* Property 2: M3M The Cullinan */}
        <div className="flex flex-col-reverse md:flex-row items-center mb-10">
          {/* Content */}
          <div className="w-full md:w-1/2 md:pr-8 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              SKA DESTINY ONE
            </h2>
            <p className="text-gray-600 leading-relaxed">
            SKA Destiny One, developed by SKA Group, is a premium residential project located in Sector ZETA 1, Greater Noida. Spanning approximately 6 acres, it offers luxurious 3 and 4 BHK apartments designed to provide a lavish lifestyle. The project boasts world-class amenities, including a swimming pool, clubhouse, gym, and indoor games facilities, ensuring residents enjoy both comfort and convenience.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={Spa}
              alt="M3M The Cullinan"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center mb-12 mt-10">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-6 md:mb-0">
            <img
              src={Three}
              alt="Rise Resort Residences"
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/* Content */}
          <div className="w-full md:w-1/2 md:pl-8 text-left">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">
              Three Page
            </h2>
            <p className="text-gray-600 leading-relaxed">
            Page Three Residences by H&S is a luxury residential project located in Jaypee Greens, Greater Noida. Spanning approximately 1.28 acres, it offers 4 and 5 BHK apartments, presidential penthouses, and duplex villas, totaling around 46 units. The development boasts modern amenities, including a spa, restaurant, cycling and jogging tracks, gymnasium, and swimming pool.
            </p>
          </div>
        </div>
      </section>
  </div>
  )
}

export default LatestProjects
