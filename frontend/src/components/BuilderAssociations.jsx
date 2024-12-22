import React from 'react'
import riseImg from '../assets/rise.png'
import m3mImg from '../assets/m3m.png'
import godrejImg from '../assets/Goorej.png'
import vistaImg from '../assets/vista.png'
// import maxImg from '../assets/max.png';

const BuilderAssociations = () => {

    const builders = [
        { id: 1, img: riseImg, alt: "RISE Resort Residences" },
        { id: 2, img: m3mImg, alt: "M3M" },
        { id: 3, img: godrejImg, alt: "Godrej" },
        { id: 4, img: vistaImg, alt: "MAX Estates" },
        // { id: 5, img: maxImg, alt: "L&T Realty" },

      ];
  return (
    <div className=" max-padd-container bg-white py-10 px-4 md:px-6 lg:px-10">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-[#000000]">Builders associated with</h2>
        <p className="text-gray-500 mt-2 text-sm md:text-base">
          More than 15,000+ builder trusted Book Your Keys
        </p>
      </div>

      {/* Logo Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
        {builders.map((builder) => (
          <div
            key={builder.id}
            className="shadow-md rounded-lg flex items-center justify-center w-full h-24"
          >
            <img
              src={builder.img}
              alt={builder.alt}
              className="h-16 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default BuilderAssociations