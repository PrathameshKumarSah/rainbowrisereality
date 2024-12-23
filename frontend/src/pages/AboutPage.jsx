import React from 'react'
import Resort from '../assets/res.png'
import Team from '../assets/team.png'
import Sunshine from '../assets/sunshine.png'
import Spa from '../assets/spa.png'

const AboutPage = () => {
  return (
    <div>
    <div
    className="relative bg-cover bg-center h-screen"
    style={{ backgroundImage: `url(${Resort})`}}
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
          className="relative bg-cover bg-center"
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
            Rise Resort Residences
          </h2>
          <p className="text-gray-600 leading-relaxed">
            A development famous as Rise Resort Residences is located in Noida
            extension on 90 acres, it is an opulent township. Low floor area
            ratio (FAR). There are only 8–10 villas on this entire acre and
            mostly concentrated on sporting amenities including a 22 thousand
            square foot indoor stadium, 4.5 acres of cricket stadium, and golf
            putting greens. There are only 819 families total in the entire 90
            Acres, making it a low-density area.
          </p>
        </div>
      </div>

      {/* Property 2: M3M The Cullinan */}
      <div className="flex flex-col-reverse md:flex-row items-center">
        {/* Content */}
        <div className="w-full md:w-1/2 md:pr-8 text-left">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            M3M The Cullinan
          </h2>
          <p className="text-gray-600 leading-relaxed">
            M3M The Cullinan Noida is located at the very 1st sector on the
            Expressway – adjacent to Delhi. Here, they guarantee new icons of
            luxurious living and architectural brilliance for residents looking
            to elevate their lifestyle. Here, all of the amenities are set up to increase your comfort & lifestyle. 
            The Cullinan is where you may hear the greatest notes of life that this opulent Mixed-Use Development has to offer. 
            The amount of flora around these homes contributes to the surroundings' high quality. 
            The Cullinan is a place where you get the best that life can offer on a platter so beautiful that you can feast on it forever. 
            The assets provide the longest-lasting pattern of living. 
            It extends over sizable acres, has a charming aspect, and a luxurious trend of living. The project is situated in Noida's Sector 94
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
    </section>
  </div>
  )
}

export default AboutPage
