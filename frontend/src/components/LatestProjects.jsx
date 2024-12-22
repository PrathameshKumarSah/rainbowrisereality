import React from 'react'
import Build from '../assets/builds.png'
import { Link } from 'react-router-dom'

const LatestProjects = () => {
  return (
    <div>
        <h2 className=" max-padd-container mt-10 text-center text-4xl md:text-5xl font-extrabold text-[#000000] overflow-y-hidden">
        Our latest Projects
      </h2>
    <div className=" max-padd-container w-full bg-white flex flex-col md:flex-row items-center justify-center px-6 py-10 md:py-20 gap-8">
    {/* Left Section - Text Content */}
    <div className="md:w-1/2 w-full text-left space-y-6">
      <h3 className="text-3xl font-bold text-[#000000]">Godrej Properties</h3>
      <p className="text-gray-600 leading-relaxed">
        Godrej Noida is located at the very 1st sector on the
        Expressway – adjacent to Delhi. Here, they guarantee new icons of
        perfect life and lifestyle: a wonderful, luxurious, and comfortable
        residence. Here, all of the amenities are set up to increase your
        comfort & lifestyle. The Cullinan is where you may hear the greatest
        notes of life that this opulent Mixed-Use Development has to offer.
        The amount of flora around these homes contributes to the surroundings'
        high quality. The Cullinan is a place where you get the best that life
        can offer on a platter so beautiful that you can feast on it forever.
        The assets provide the longest-lasting pattern of living. It extends
        over sizable acres, has a charming aspect, and a luxurious trend of
        living. The project is situated in Noida's Sector 94.
      </p>
      {/* Button */}
      <Link
        to="/project"
        className="inline-flex items-center gap-2 text-[#000000] font-semibold text-lg"
      >
        More Details{" "}
        <span className=" ">
          ↗
        </span>
      </Link>
    </div>

    {/* Right Section - Image */}
    <div className="md:w-1/2 w-full">
      <img
        src={Build}
        alt="M3M Cullinan"
        className="w-full h-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
  </div>
  )
}

export default LatestProjects