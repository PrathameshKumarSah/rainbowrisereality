import React from 'react'
import Back from '../assets/back.png'
import Spa from '../assets/span.png'
import Sport from '../assets/sport.png'
import Swim from '../assets/swim.png'
import Creast from '../assets/creast.png'
import Maps from '../assets/map creast.png'
import Maps1 from '../assets/map creast2.png'
import Evoke from '../assets/evoke1.png'
import Evokes from '../assets/evoke2.png'
import Windsor1 from '../assets/windsor1.png'
import Windsor2 from '../assets/windsor2.png'
import Golf from '../assets/golf.png'
import Pools from '../assets/pools1.png'
import Gym from '../assets/gym.png'
import Room from '../assets/room.png'
import Swims from '../assets/swim.png'
import Relax from '../assets/relax.png'
import Marvel from '../assets/marvel.png'
import Party from '../assets/party.png'
import Swimms from '../assets/swims.png'
import Story1 from '../assets/story1.jpg'
import Story2 from '../assets/story2.jpg'
import Sliders from '../constant/Sliders'

const Project = () => {
  return (
    <div>
    <div className="relative h-[800px]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Back})`,
      }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-center text-center text-white px-8 pt-20">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 overflow-y-hidden">
        GODREJ GOLF LINK LUXURY VILLAS
      </h1>
      <h2 className="text-xl sm:text-2xl mb-6 overflow-y-hidden">Greater Noida, UP</h2>
      <div className="text-lg font-semibold px-6 py-2  text-white inline-block rounded shadow-sm overflow-y-hidden">
        3 & 4 BHK Luxury Golf Villas
      </div>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-20">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high sm:mb-1 mb-5 overflow-y-hidden">
          <h3 className="text-2xl font-bold overflow-y-hidden">2.50 Cr* Onwards</h3>
          <p className="text-sm mt-2 text-white">STARTING RESALE PRICE</p>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high sm:mb-0 mb-3 overflow-y-hidden">
          <h3 className="text-xl font-bold mb-2 overflow-y-hidden">
            Want To Sale Your Unit at Best Price
          </h3>
          <span className="bg-black text-white px-3 py-1 rounded-sm mr-2">
            EXCLUSIVE
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-sm">
            RESALE DEALS
          </span>
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high mb-3 overflow-y-hidden">
          <h3 className="text-xl font-bold mb-2">Ready To Move In</h3>
          <span className="bg-black text-white px-3 py-1 rounded-sm mr-2">
            EXCLUSIVE
          </span>
          <span className="bg-green-500 text-white px-3 py-1 rounded-sm">
            RESALE DEALS
          </span>
        </div>
      </div>
    </div>
  </div>
  <section className="max-padd-container w-full mt-10 ">
      {/* Heading */}
      <div className="text-center mb-8 px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 overflow-y-hidden">
          Best Service & Facilities
        </h2>
      </div>

      {/* Cards Container */}
      <div className="flex items-center justify-center relative">

        {/* Cards */}
        <div className="flex overflow-x-scroll sm:overflow space-x-6 px-6">
          {/* Card 1 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={Spa}
              alt="Spa & Wellness"
              className="w-full h-70 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Spa & Wellness
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={Sport}
              alt="Sport Center"
              className="w-full h-70 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Sport Center
              </h3>
            </div>
          </div>

           {/* Card 3 */}
           <div className="flex-shrink-0 w-80 sm:w-96 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
            <img
              src={Swim}
              alt="Sport Center"
              className="w-full h-70 object-cover rounded-t-lg"
            />
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold text-gray-700">
                Swimming Pool
              </h3>
            </div>
          </div>
        </div>
      </div>

      <h3 className='text-[#000000] font-bold text-center text-5xl pt-4 overflow-y-hidden'>SUITS</h3>
      <Sliders />

      {/* Enquire Now Button */}
      <div className="text-center mt-6">
        <button className="bg-[#be9035] text-white px-6 py-2 rounded-sm font-semibold hover:bg-yellow-500 transition">
          ENQUIRE NOW
        </button>
      </div>
    </section>
    <div className="max-padd-container p-8 overflow-y-hidden">
      <h1 className="text-3xl font-bold text-center mb-6">Check Our Best Exclusive RESALE Units</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-hidden">
        {[
          { title: 'Crest Villa', size: '100 TO 150 SQ YARD', link: '#' },
          { title: 'Exquisite Villas', size: '150 SQ YARD', link: '#' },
          { title: 'Evoke Villa', size: '180 TO 220 SQ YARD', link: '#' },
          { title: 'Suits', size: '720-975 SQ FT', link: '#' },
          { title: 'Park Lane', link: '#' },
          { title: 'Windsor', size: '100 TO 150 SQ FT', link: '#' },
        ].map((unit, index) => (
          <div key={index} className=" bg-bl
          ack bg-opacity-10 shadow-lg rounded-lg overflow  transform transition-transform duration-300 hover:scale-105">
            <img src={Creast} alt={unit.title} className="w-full h-70 object-cover bg-black bg-opacity-10 transform transition-transform duration-300 hover:scale-105" />
            <div className="p-6">
              <h2 className="text-xl font-semibold">{unit.title}</h2>
              <p className="text-gray-600">{unit.size}</p>
              <a href={unit.link} className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">ENQUIRE NOW</a>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="max-padd-container p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Floor Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Row with Crest V1 and Crest V2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">CREST FLOOR PLAN - V1</h2>
          <img src={Maps} alt="Crest Floor Plan V1" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">CREST FLOOR PLAN - V2</h2>
          <img src={Maps1} alt="Crest Floor Plan V2" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        
        {/* Second Row with Evoke */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">EVOKE</h2>
          <img src={Evoke} alt="Evoke Floor Plan" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">EVOKE</h2>
          <img src={Evokes} alt="Evoke Floor Plan" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>

         {/* First Row with Crest V1 and Crest V2 */}
         <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">Windsor</h2>
          <img src={Windsor1} alt="Crest Floor Plan V1" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">Windsor</h2>
          <img src={Windsor2} alt="Crest Floor Plan V2" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
      <div className="flex justify-center items-center">
          <a href="#" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition">ENQUIRE NOW</a>
        </div>
    </div>
    <div className="bg-secondary p-8 w-full">
      <h1 className="text-white text-4xl font-bold text-center mb-6 overflow-y-hidden">View Our Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-3 gap-6">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Golf} alt="Golf Course" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Pools} alt="Building" className="w-full  h-50 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Gym} alt="Pool Area" className="w-full  h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Room} alt="Living Room" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Swims} alt="Interior" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={Relax} alt="Relaxing" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
    <div className="max-padd-container  sm:flex-row justify-center items-center bg-[#f8f5ef] p-4 sm:p-8">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-center w-full mb-6 sm:mb-8 overflow-y-hidden">
        Location
      </h1>

      {/* Maps Container */}
      <div className="flex flex-col sm:flex-row w-full gap-6">
        {/* First Map */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.723655937583!2d77.5119842465003!3d28.47295268432532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea853d1c9a8f%3A0x1279ef07f589fa5!2sGodrej%20Golf%20Links!5e0!3m2!1sen!2sin!4v1702920000000!5m2!1sen!2sin"
            alt="Location Overview Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Second Map */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.723655937583!2d77.5119842465003!3d28.47295268432532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea853d1c9a8f%3A0x1279ef07f589fa5!2sGodrej%20Golf%20Links!5e0!3m2!1sen!2sin!4v1702920000000!5m2!1sen!2sin"
            className="w-full h-72 rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 sm:p-8">
      {/* Villa Highlights Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 overflow-y-hidden">
        VILLA HIGHLIGHTS
      </h2>
      <div className="flex items-center justify-between">

        {/* Highlights Content */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-3/4 mx-auto overflow-y-hidden">
          {/* Highlight 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Marvel} // Replace with actual icon
              alt="Marble Flooring"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Engineered Marble flooring</p>
          </div>

          {/* Highlight 2 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105">
            <img
              src={Party}// Replace with actual icon
              alt="Party Deck"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Party Deck on rooftop</p>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105">
            <img
              src={Swimms}// Replace with actual icon
              alt="Party Deck"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Swimming Time</p>
          </div>
        </div>  
      </div>

      {/* Success Story Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center my-12 overflow-y-hidden">
        OUR SUCCESS STORY
      </h2>
      <div className="flex items-center justify-between">
        {/* Success Story Content */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-3/4 mx-auto overflow-y-hidden">
          {/* Story 1 */}
          <div className="flex items-center justify-center w-full sm:w-1/2 border rounded-lg p-4 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Story1}// Replace with actual newspaper image
              alt="Story 1"
              className="w-full h-auto rounded-sm overflow-y-hidden"
            />
          </div>

          {/* Story 2 */}
          <div className="flex items-center justify-center w-full sm:w-1/2 border rounded-lg p-4 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Story2} // Replace with actual newspaper image
              alt="Story 2"
              className="w-full h-auto rounded-sm overflow-y-hidden"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 sm:p-8">
      {/* Agents Rera Number Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2">
          Agents Rera Number
        </h2>
        <p className="text-lg sm:text-xl font-bold text-blue-700">
          UPRERAAGT244958
        </p>
        <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-sm hover:bg-yellow-600 transition">
          VIEW NOW
        </button>
      </div>

      {/* Property Rera Numbers Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Property Rera Number
        </h2>

        {/* Property Rera Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <div className="bg-yellow-600 text-white px-6 py-2 rounded-sm font-semibold">
            Crest UPRERAPRJ151
          </div>
          <div className="bg-yellow-600 text-white px-6 py-2 rounded-sm font-semibold">
            Evoke UPRERAPRJ2126
          </div>
          <div className="bg-yellow-600 text-white px-6 py-2 rounded-sm font-semibold">
            Exquisite UPRERAPRJ3203
          </div>
        </div>
      </div>

      {/* Disclaimer Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Disclaimer</h2>
        <p className="text-gray-600 text-sm sm:text-base px-4 sm:px-12 leading-relaxed">
          Please be advised that this website is not an official site and serves
          solely as an informational portal managed by a RERA authorized real
          estate agent. It does not constitute an offer or guarantee of any
          services. The prices displayed on this website are subject to change
          without prior notice, and the availability of properties cannot be
          guaranteed. The images showcased on this website are for
          representational purposes only and may not accurately reflect the
          actual properties. We may share your data with Real Estate agents for
          necessary communication purposes.
        </p>
      </div>
    </div> 
  </div>
  )
}

export default Project
