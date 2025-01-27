import React, { useEffect } from 'react'
import Prov from '../assets/prov.mp4'
import HeroSearchBar from '../components/HeroSearchBar'
import ProjectLongCard from '../components/ProjectLongCard'
import {apiStore} from "../store/apiHandler.js"


const Allproject = () => {
  const {properties, getProjects, propertyLoading} = apiStore();
  
  useEffect(() => {
      getProjects();
    }, [])
  
  return (
    <div>
       <div className="relative h-[400px]">
          {/* Background Image */}
          <video
                    className='absolute top-0 left-0 w-full h-full object-cover'
                    src={Prov}
                    autoPlay
                    loop
                    muted
                  />
        </div>

    {/* <h1 className='text-4xl font-bold text-center mt-10 mb-10'> PROJECTS </h1> */}

    <div className='max-padd-container flex items-center my-4 justify-center'> <HeroSearchBar /> </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col md:flex-row relative">
        {/* Content Section */}
        {!propertyLoading ?
          <div className="lg:w-3/4 w-full p-4 space-y-4">
            {properties?.map((item) => (
              <ProjectLongCard key={item.id} data={item} />
            ))}
          </div>
           :
          <div className='lg:w-3/4 w-full p-4 space-y-4'><LoadingCard /> <LoadingCard /> <LoadingCard /></div>
        }

      {/* Enquiry Box */}
      <div className="lg:w-1/4 w-full p-4">
        <div className="lg:sticky lg:top-20 lg:bottom-20">
          <div className="bg-gray-100 border rounded-lg p-4 shadow-lg">
            <h2 className="text-xl font-bold mb-4">Enquire Box</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full border rounded-lg p-2"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full border rounded-lg p-2"
                  placeholder="Your Email"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  className="w-full border rounded-lg p-2"
                  rows="4"
                  placeholder="Your Message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-lg w-full"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>


  )
}

export const LoadingCard = () => {
  return (
    <div className="p-4 animate-pulse">
      <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
        {/* Left Section */}
        <div className="lg:w-1/2 flex flex-col">
          <div className="h-full w-full bg-gray-300 rounded"></div>
        </div>
        {/* Right Section */}
        <div className="lg:w-2/3">
          <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="h-4 w-20 bg-yellow-300 rounded"></span>
            </div>
            <div className="h-6 w-2/3 bg-gray-300 rounded mt-2"></div>
            <div className="flex flex-col justify-center mt-4">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center p-2">
                  <div className="h-5 w-5 bg-blue-300 rounded-full mr-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="flex items-center p-2">
                  <div className="h-5 w-5 bg-green-300 rounded-full mr-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="flex items-center p-2">
                  <div className="h-5 w-5 bg-purple-300 rounded-full mr-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
                <div className="flex items-center p-2">
                  <div className="h-5 w-5 bg-red-300 rounded-full mr-2"></div>
                  <div className="h-4 w-24 bg-gray-300 rounded"></div>
                </div>
              </div>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="h-10 w-32 bg-red-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allproject


