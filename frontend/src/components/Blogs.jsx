import React from 'react'
import Home2 from '../assets/home2.jpeg'
import Home4 from '../assets/home4.jpeg'
import Home5 from '../assets/home5.jpeg'
import Home3 from '../assets/home3.jpeg'

const Blogs = () => {

  return (
    
    <div className="p-6 max-w-7xl mx-auto">
    <h1 className="text-3xl md:text-5xl font-bold text-gray-900">
      Discover Your Perfect <span className="text-amber-600">Property Match</span>
    </h1>
    <p className="mt-2 text-gray-600 max-w-2xl">
      Discover Your Perfect Property Match with our expert team, dedicated to finding the ideal home or investment on it.
    </p>
    <div className="bg-white  py-6 sm:py-8 lg:py-12">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src={Home2}
          loading="lazy"
          alt="Photo by Minh Pham"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
          src={Home4}
          loading="lazy"
          alt="Photo by Magicle"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80"
      >
        <img
          src={Home5}
          loading="lazy"
          alt="Photo by Martin Sanchez"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      {/* image - end */}
      {/* image - start */}
      <a
        href="#"
        className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80"
      >
        <img
          src={Home3}
          loading="lazy"
          alt="Photo by Lorenzo Herrera"
          className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
        />
      </a>
      {/* image - end */}
    </div>
  </div>
</div>
  </div>
  );
};

export default Blogs;
