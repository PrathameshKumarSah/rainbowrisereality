import React from 'react'
import Team from '../assets/team.png'
import Sunshine from '../assets/sunshine.png'
import Spa from '../assets/spa.png'
import Spa1 from '../assets/gig.png'
import Heroback5 from '../assets/res.png'
import userIcon from '../assets/user.svg'

const AboutPage = () => {

  return (
    <div>
    <div
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${Heroback5})` }}
  >
    {/* Overlay to darken the background */}
    <div className="absolute inset-0  "></div>
    
    {/* Content */}
    <div className="relative flex flex-col justify-center items-center h-full text-center px-4">
      <h2 className="text-white text-sm sm:text-lg uppercase tracking-wider mb-2">
        ABOUT US
      </h2>
      <h1 className="text-orange-500 text-3xl sm:text-5xl font-bold mb-4">
        Everyone deserves the right home.
      </h1>
      <p className="text-white text-sm sm:text-lg max-w-2xl">
        The right home is the starting place of love, hopes, and dreams
      </p>
    </div>
  </div>
  <div className="bg-white px-6 py-10 md:px-20 lg:px-32">
      {/* Title Section */}
      <h2 className="text-4xl font-bold text-gray-900 mb-4">
        What makes <span className="text-[#000000]">Rainbow Rise Realty</span> Different from other <span className="text-black">Brands</span>
      </h2>

      {/* Description Section */}
      <p className="text-gray-600 mb-8 leading-relaxed">
        At Rainbow Rise Realty you will have 100% transparency when it comes to builder background, project details, price list, possession date & payment plan. As your partner while finding your desired home we try to get exclusive deals for our customers, below is our 3 USP's due to which we are one of the top growing real-estate companies in Noida.
      </p>

      {/* Key Features List */}
      <ul className="space-y-4 text-gray-800">
        <li className="flex items-start">
          <span className="text-xl font-bold text-gray-900 mr-2">1.</span>
          <p className="font-semibold">Finding the right product as per your need</p>
        </li>
        <li className="flex items-start">
          <span className="text-xl font-bold text-gray-900 mr-2">2.</span>
          <p className="font-semibold">
            End-to-end support from searching the product to purchasing post delivery of the product. We work as your retainer for life time.
          </p>
        </li>
        <li className="flex items-start">
          <span className="text-xl font-bold text-gray-900 mr-2">3.</span>
          <p className="font-semibold">100% transparency on each and every step</p>
        </li>
      </ul>

      {/* Image Section */}
      <div className="mt-8 flex justify-center">
        <img
          src={Team} 
          alt="Team Working Together"
          className="relative bg-cover bg-center "
        />
      </div>
    </div>
    <section className="bg-secondary text-white py-12 mb-12">
      <div className="container mx-auto flex flex-wrap justify-between text-center">
        {/* Satisfied customers */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-4xl font-bold">500+</h2>
          <h3 className="font-bold mt-2">Satisfied customers</h3>
          <p className="text-sm mt-2 text-gray-300">
            we are proud to say that we have more than 500 happy customers
          </p>
        </div>

        {/* ROI */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-4xl font-bold">200-300%</h2>
          <h3 className="font-bold mt-2">Return on investment</h3>
          <p className="text-sm mt-2 text-gray-300">
            Our customers have reported an average of 200-300% ROI
          </p>
        </div>

        {/* Global downloads */}
        <div className="w-full sm:w-1/2 md:w-1/4 mb-8 sm:mb-0">
          <h2 className="text-4xl font-bold">1000+ cr</h2>
          <h3 className="font-bold mt-2">Global downloads</h3>
          <p className="text-sm mt-2 text-gray-300">
            Across NCR we have given 1000+ crores investment till now through our happy customers
          </p>
        </div>

        {/* 5-star reviews */}
        <div className="w-full sm:w-1/2 md:w-1/4">
          <h2 className="text-4xl font-bold">100+</h2>
          <h3 className="font-bold mt-2">5-star reviews</h3>
          <p className="text-sm mt-2 text-gray-300">
            real estate channel partners supporting us while full filling your dream
          </p>
        </div>
      </div>
    </section>
    <section className="container mx-auto p-6">
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
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
          GODREJ
          </h2>
          <p className="text-gray-600 leading-relaxed">
          Godrej Properties Noida is a prestigious real estate development offering modern homes with world-class amenities and sustainable designs. Located in prime areas of Noida, these properties blend luxury, comfort, and innovation. With a reputation for quality and timely delivery, Godrej Properties ensures an exceptional lifestyle in one of India's fastest-growing cities.
          </p>
        </div>
      </div>

      {/* Property 2: M3M The Cullinan */}
      <div className="flex flex-col-reverse md:flex-row items-center mb-12">
        {/* Content */}
        <div className="w-full md:w-1/2 md:pr-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
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
            {/* Property 1: Rise Resort Residences */}
            <div className="flex flex-col md:flex-row items-center mb-12">
        {/* Image */}
        <div className="w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src={Spa1}
            alt="Rise Resort Residences"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Content */}
        <div className="w-full md:w-1/2 md:pl-8 text-left mt-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Three Page
          </h2>
          <p className="text-gray-600 leading-relaxed">
          Page Three Residences by H&S is a luxury residential project located in Jaypee Greens, Greater Noida. Spanning approximately 1.28 acres, it offers 4 and 5 BHK apartments, presidential penthouses, and duplex villas, totaling around 46 units. The development boasts modern amenities, including a spa, restaurant, cycling and jogging tracks, gymnasium, and swimming pool.
          </p>
        </div>
      </div>
      <div class="fixed bottom-4 right-4">
                 <button className="flexCenter gap-x-6 medium-10 rounded-full pr-3">
                                   <a href="https://wa.me/8058517274" target="_blank"><img src={userIcon} alt="" height={40} width={40} /></a>
                                    <span className='hidden'>Whatsapp</span>
                                </button>
            </div>
    </section>
  </div>
  )
}

export default AboutPage
