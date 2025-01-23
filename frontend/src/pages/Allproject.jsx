import React from 'react'
import { Link } from 'react-router-dom'
import Prov from '../assets/prov.mp4'
import Imag from '../assets/img3.png'
import Imag1 from '../assets/img2.png'

const Allproject = () => {
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

    <h1 className='text-4xl font-bold text-center mt-10 mb-10'> PROJECTS </h1>
      {/* Cards */}
      <Link to={'/projectpage'}><div className=" mx-auto p-4 mt-20">
                  <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-md rounded-lg overflow-hidden">
                      {/* Left Section */}
                      <div className="lg:w-1/2 flex flex-col">
                          <img
                              src={Imag}
                              alt="Building"
                              className="h-max lg:h-auto w-full object-cover" />
                      </div>
                      {/* Right Section */}
                      <div className="lg:w-2/3 p-6">
      
                      <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                New Launch
              </span>
            </div>
            <h3 className="text-3xl font-bold mt-2">Godrej Properties</h3>
            <p className="text-gray-500">NH-24, Ghaziabad</p>
            <p className="text-sm text-gray-500 mt-2">Possession On 2025-12-24</p>
            <span className="text-[#F93827] text-3xl font-bold">₹1.55 Cr</span> 

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2">UNIT</th>
                    <th className="border-b py-2">SIZE</th>
                    <th className="border-b py-2">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">3 BHK</td>
                    <td className="py-2">1720 Sq.Ft.</td>
                    <td className="py-2">1.55 Cr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <button className="bg-[#F93827] text-white px-4 py-2 rounded">
                Instant Callback
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <span>❤️</span>
              </button>
            </div>
          </div>
      </div>
                  </div>
              </div>
        </Link>

        {/* Cards */}
      <Link to={'/projectpage'}><div className=" mx-auto p-4 mt-20">
                  <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-md rounded-lg overflow-hidden">
                      {/* Left Section */}
                      <div className="lg:w-1/2 flex flex-col">
                          <img
                              src={Imag1}
                              alt="Building"
                              className="h-max lg:h-auto w-full object-cover" />
                      </div>
                      {/* Right Section */}
                      <div className="lg:w-2/3 p-6">
      
                      <div className="p-4">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                New Launch
              </span>
            </div>
            <h3 className="font-bold text-3xl mt-2">ATS Floral Pathways</h3>
            <p className="text-gray-500">NH-24, Ghaziabad</p>
            <p className="text-sm text-gray-500 mt-2">Possession On 2025-12-24</p>
            <span className="text-[#F93827] text-3xl font-bold">₹1.55 Cr</span>

            <div className="overflow-x-auto mt-4">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2">UNIT</th>
                    <th className="border-b py-2">SIZE</th>
                    <th className="border-b py-2">PRICE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-2">3 BHK</td>
                    <td className="py-2">1720 Sq.Ft.</td>
                    <td className="py-2">1.55 Cr</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 flex justify-between items-center">
              <button className="bg-[#F93827] text-white px-4 py-2 rounded">
                Instant Callback
              </button>
              <button className="text-gray-500 hover:text-gray-700">
                <span>❤️</span>
              </button>
            </div>
          </div>
      </div>
                  </div>
              </div>
        </Link>
    </div>


  )
}

export default Allproject
