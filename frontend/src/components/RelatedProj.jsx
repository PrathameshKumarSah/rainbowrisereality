import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Building, Bed, Ruler, Phone } from "lucide-react"
import { apiStore, BASE_URL } from '../store/apiHandler';


const RelatedProj = ({data, type='project'}) => {
    const {setModalOpen} = apiStore();    
    
    const handleOnClick = (event) => {
        event.preventDefault(); // Prevent default behavior of the card's link
        event.stopPropagation(); // Prevent the click from triggering the card's link
        window.location.href = `tel:+918058517274`;
        setModalOpen(true, property.title);
        return ;
    }

  return (
    <Link to={ type==="project" ? '/project/'+data?.id : '/properties/'+data?.id }>
        <div className=" mx-auto p-1 md:p-4 ">
            <div className="flex flex-col bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
                {/* Left Section */}
                <div class="h-28 md:h-52 flex flex-col">
                    <img src={data?.imgs && BASE_URL + data?.imgs.split(',')[0]} alt={data?.imgs && data?.imgs.split(',')[0]}
                    class="h-full w-full object-cover"
                    />
                </div>
                {/* Right Section */}
                <div className="">

                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <span className="text-xs md:text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                                {data.status}
                            </span>
                        </div>
                        <h3 className="text-sm md:text-xl font-bold mt-2 line-clamp-1">{data.title}</h3>

                        <div className="flex flex-col justify-center">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
                                {/* Location */}
                                <div className="flex items-center p-1 md:p-2">
                                    <MapPin className="text-blue-500 mr-1 w-4" />                                    
                                    <p className="text-xs lg:text-sm">{data.location}</p>
                                </div>
                                
                                <div className="flex items-center p-1 md:p-2">
                                    <Building className="text-green-500 mr-1 w-5" />
                                    <p className="text-xs lg:text-sm">{data.category}</p>
                                </div>

                                {/* BHK */}
                                <div className="flex items-center p-1 md:p-2">
                                    <Bed className="text-purple-500 mr-1 w-4" />
                                    <p className="text-xs lg:text-sm">{data.rooms}</p>
                                </div>

                                {/* Area Size */}
                                <div className="flex items-center p-1 md:p-2">
                                    <Ruler className="text-red-500 mr-1 w-4" />
                                    <p className="text-xs lg:text-sm">{data.area_size}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-sm md:text-base flex gap-3">
                            <button className="bg-[#F93827] flex gap-2 shadow-md text-white px-4 py-2 rounded"
                                onClick={handleOnClick}
                            >
                                <Phone />
                                <span>Instant Callback</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

export default RelatedProj
