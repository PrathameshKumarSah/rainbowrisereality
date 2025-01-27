import React from 'react'
import { Link } from 'react-router-dom'
import Imag from '../assets/img3.png'
import Imag1 from '../assets/img2.png'
import { MapPin, Building, Bed, Ruler, Phone } from "lucide-react"
import { BASE_URL } from '../store/apiHandler';


const ProjectLongCard = ({data}) => {
    
    
    const handleButtonClick = (event) => {
        event.preventDefault(); // Prevent default behavior of the card's link
        event.stopPropagation(); // Prevent the click from triggering the card's link
        alert("Button inside the card clicked!");
        return ;
    }

  return (
    <Link to={ '/projectpage'}>
        <div className=" mx-auto p-4 ">
            <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
                {/* Left Section */}
                <div class="lg:w-1/2 flex flex-col">
                    <img src={ BASE_URL + data.imgs.split(',')[0]} alt={data.imgs.split(',')[0]}
                    class="h-full w-full object-cover"
                    />
                </div>
                {/* Right Section */}
                <div className="lg:w-2/3">

                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                                {data.status}
                            </span>
                        </div>
                        <h3 className="text-3xl font-bold mt-2">{data.title}</h3>
                        {/* <p className="text-gray-500">Project Location</p> */}
                        {/* <p className="text-sm text-gray-500 mt-2">Possession On 2025-12-24</p>
                        <span className="text-[#F93827] text-3xl font-bold">₹1.55 Cr</span> */}

                        {/* <div className="overflow-x-auto mt-4">
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
                        </div> */}

                        <div className="flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-2">
                                {/* Location */}
                                <div className="flex items-center p-2">
                                    <MapPin className="text-blue-500 mr-2" />                                    
                                    <p className="text-sm">{data.location}</p>
                                </div>
                                
                                <div className="flex items-center p-2">
                                    <Building className="text-green-500" />
                                    <p className="text-lg font-semibold">{data.category}</p>
                                </div>

                                {/* BHK */}
                                <div className="flex items-center p-2">
                                    <Bed className="text-purple-500" />
                                    <p className="text-lg font-semibold">{data.rooms}</p>
                                </div>

                                {/* Area Size */}
                                <div className="flex items-center p-2">
                                    <Ruler className="text-red-500" />
                                    <p className="text-lg font-semibold">{data.area_size}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                            {/* <button className="bg-[#F93827] text-white px-4 py-2 rounded">
                                View Details
                            </button> */}
                            <button className="bg-[#F93827] flex gap-2 shadow-md text-white px-4 py-2 rounded"
                                onClick={handleButtonClick}
                            >
                                <Phone />
                                Instant Callback
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default ProjectLongCard