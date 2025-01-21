import React from 'react'
import Reslog from '../assets/resl.png'
import Comlog from '../assets/comlog.png'
import { Link } from 'react-router-dom'
import Allpro from '../assets/allp.png'

const Allproject = () => {
  return (
    <div>
      <div className="relative h-[600px]">
               {/* Background Image */}
               <div
                 className="absolute inset-0 bg-cover bg-center"
                 style={{ backgroundImage: `url(${Allpro})` }}
               ></div>
             </div>
<div className="flex flex-wrap items-center justify-center bg-image">
<Link to={'/properties'}><div className="flex-shrink-0 m-6 relative overflow-hidden bg-orange-500 rounded-lg max-w-xs shadow-lg">
    <svg
      className="absolute bottom-0 left-0 mb-8"
      viewBox="0 0 375 283"
      fill="none"
      style={{ transform: "scale(1.5)", opacity: "0.1" }}
    >
      <rect
        x="159.52"
        y={175}
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <div
        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style={{
          background: "radial-gradient(black, transparent 60%)",
          transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
          opacity: "0.2"
        }}
      />
      <img
        className="relative w-60"
        src={Reslog}
        alt="Residential "
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1">PROJECTS</span>
      <div className="flex justify-between">
        <span className="block font-semibold text-2xl">Residential Properties</span>
      </div>
    </div>
  </div>
  </Link>

  <Link to={'/properties'}> <div className="flex-shrink-0 m-6 relative overflow-hidden bg-teal-500 rounded-lg max-w-xs shadow-lg">
    <svg
      className="absolute bottom-0 left-0 mb-8"
      viewBox="0 0 375 283"
      fill="none"
      style={{ transform: "scale(1.5)", opacity: "0.1" }}
    >
      <rect
        x="159.52"
        y={175}
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 159.52 175)"
        fill="white"
      />
      <rect
        y="107.48"
        width={152}
        height={152}
        rx={8}
        transform="rotate(-45 0 107.48)"
        fill="white"
      />
    </svg>
    <div className="relative pt-10 px-10 flex items-center justify-center">
      <div
        className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"
        style={{
          background: "radial-gradient(black, transparent 60%)",
          transform: "rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1)",
          opacity: "0.2"
        }}
      />
      <img
        className="relative w-30"
        src={Comlog}
        alt="Commercial "
      />
    </div>
    <div className="relative text-white px-6 pb-6 mt-6">
      <span className="block opacity-75 -mb-1">PROJECTS</span>
      <div className="flex justify-between">
        <span className="block font-semibold text-2xl">Commercial Properties</span>
      </div>
    </div>
  </div>
  </Link>
</div>
</div>


  )
}

export default Allproject
