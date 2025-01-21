import React, { useEffect, useState } from 'react'
import Item from './Item'
import {apiStore} from "../store/apiHandler.js"


const Properties = () => {
    const {properties, getProperties, propertyLoading} = apiStore();

    useEffect(() => {
        getProperties();
      }, [])  
    
    const [category, setCategory] = useState("all");
    const [status, setStatus] = useState("");
  
    const filteredProperties = properties.filter((property) => {
        const categoryMatch = category === "all" || property.category === category;
        const statusMatch = !status || property.status === status;
        return categoryMatch && statusMatch;
      });
    
    const handleStatusClick = (selectedStatus) => {
    setStatus((prevStatus) => (prevStatus === selectedStatus ? "" : selectedStatus));
    };
    
    return (
        <div className="max-padd-container bg-gray-100 my-12 py-6 xl:py-20 overflow-y-hidden">
            <h3 className='h3 text-gray-700 text-center'>OUR PROJECTS</h3>
            
            {/* Category Buttons */}
            <div className="flex justify-center space-x-4 mb-4 text-sm md:text-base">
                <button
                className={`px-4 py-2 rounded ${category === "all" ? "bg-gray-700 text-white" : "bg-gray-200"}`}
                onClick={() => setCategory("all")}
                >
                All
                </button>
                <button
                className={`px-4 py-2 rounded ${category === "residential" ? "bg-gray-700 text-white" : "bg-gray-200"}`}
                onClick={() => setCategory("residential")}
                >
                Resident
                </button>
                <button
                className={`px-4 py-2 rounded ${category === "commercial" ? "bg-gray-700 text-white" : "bg-gray-200"}`}
                onClick={() => setCategory("commercial")}
                >
                Commercial
                </button>
            </div>

            {/* Status Buttons */}
            <div className="flex justify-center space-x-4 mb-4 text-sm md:text-base">
                <button
                className={`px-4 py-2 rounded ${status === "Ready to Move" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleStatusClick("Ready to Move")}
                >
                Ready to Move
                </button>
                <button
                className={`px-4 py-2 rounded ${status === "Upcoming" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleStatusClick("Upcoming")}
                >
                Upcoming
                </button>
                <button
                className={`px-4 py-2 rounded ${status === "Under Construction" ? "bg-green-500 text-white" : "bg-gray-200"}`}
                onClick={() => handleStatusClick("Under Construction")}
                >
                Under Construction
                </button>
            </div>

            {/* Property Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4">
            {filteredProperties.map((property, index) => (
                <Item property={property} key={index} />
            ))}
            </div>

            {/* Show on Loading Data */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                {propertyLoading && 
                    Array.from({ length: 4 }, (_, index) => (
                        <RepeatedElement key={index} />
                    ))
                }
            </div>

            {/* Show when no match property found */}
            {filteredProperties.length==0 && !propertyLoading && <h3 className='h3 text-white text-center my-12'>Not Found</h3>}
        </div>
);
}


const RepeatedElement = () => (
    <div className="bg-white shadow-xl rounded-lg p-6 animate-pulse">
        {/* Image Placeholder */}
        <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-lg"></div>
        
        {/* Title Placeholder */}
        <div className="mt-6">
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-3/4 mb-2"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-1/2"></div>
        </div>
        
        {/* Content Placeholder */}
        <div className="mt-8 space-y-3">
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-full"></div>
            <div className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-md w-10/12"></div>
        </div>
        
        {/* Button Placeholder */}
        <div className="mt-6">
            <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded-full w-32 mx-auto"></div>
        </div>
    </div>  
  );

export default Properties
