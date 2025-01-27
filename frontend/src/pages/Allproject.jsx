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
    {!propertyLoading && 
      <div className="flex-1 flex flex-col lg:flex-row relative">
      {/* Content Section */}
      <div className="lg:w-3/4 w-full p-4 space-y-4">
        {properties?.map((item) => (
          <ProjectLongCard key={item.id} data={item} />
        ))}
      </div>

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
    }

    {propertyLoading && 'Loading...'}


    </div>


  )
}

export default Allproject


