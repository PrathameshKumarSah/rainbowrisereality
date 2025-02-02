import React from 'react'
import Team from '../assets/home1.jpeg'
import Sunshine from '../assets/home2.jpeg'
import Spa from '../assets/home4.jpeg'
import Spa1 from '../assets/home3.jpeg'
import Heroback5 from '../assets/res.png'

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
   <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 mb-7  flex flex-col justify-center">
    <div className="flex flex-col sm:flex-row mx-auto">
      {/*- Starts component */}{" "}
      <a href="#_">
        {" "}
        <img
          src={Spa}
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-60 w-60 object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src={Spa1}
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-60 w-60 object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src={Sunshine}
          className="rounded-xl  rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-60 w-60 object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      <a href="#_">
        {" "}
        <img
          src={Team}
          className="rounded-xl  -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-60 w-60 object-cover hover:scale-150 transform origin-bottom"
          alt="#_"
        />{" "}
      </a>
      {/*- Ends component */}
    </div>
    {/* Ends links to tutorial */}
  </div>
  </div>
  )
}

export default AboutPage
