import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Building, Bed, Ruler, Phone } from "lucide-react"
import { apiStore, BASE_URL } from '../store/apiHandler';


const ProjectLongCard = ({data, type='project'}) => {
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
        <div className=" mx-auto p-4 ">
            <div className="flex flex-col lg:flex-row bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
                {/* Left Section */}
                <div class="lg:w-1/2 h-64 flex flex-col">
                    <img src={data?.imgs && BASE_URL + data?.imgs.split(',')[0]} alt={data?.imgs && data?.imgs.split(',')[0]}
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

                        <div className="flex flex-col justify-center">
                            <div className="grid grid-cols-2 gap-2">
                                {/* Location */}
                                <div className="flex items-center p-2">
                                    <MapPin className="text-blue-500 mr-2" />                                    
                                    <p className="">{data.location}</p>
                                </div>
                                
                                <div className="flex items-center p-2">
                                    <Building className="text-green-500" />
                                    <p className="text-base">{data.category}</p>
                                </div>

                                {/* BHK */}
                                <div className="flex items-center p-2">
                                    <Bed className="text-purple-500" />
                                    <p className="text-base">{data.rooms}</p>
                                </div>

                                {/* Area Size */}
                                <div className="flex items-center p-2">
                                    <Ruler className="text-red-500" />
                                    <p className="text-base">{data.area_size}</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex gap-3">
                            <button className="bg-[#F93827] flex gap-2 shadow-md text-white px-4 py-2 rounded"
                                onClick={handleOnClick}
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
