import React, { useEffect, useState } from 'react';
import ProjectItem from './ProjectItem.jsx';
import { apiStore } from "../store/apiHandler.js";

const Properties = () => {
    const { properties, getProjects, propertyLoading } = apiStore();
  
    useEffect(() => {
        getProjects();
    }, []);
  
    const [category, setCategory] = useState("all");
    const [status, setStatus] = useState("");
    const [visibleItems, setVisibleItems] = useState(8); // Default to 8 for desktop
    const [windowWidth, setWindowWidth] = useState(window.innerWidth); // Track window width
  
    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        
        window.addEventListener('resize', handleResize);
        
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  
    // Set visible items based on screen size
    useEffect(() => {
        if (windowWidth < 768) { // Mobile devices
            setVisibleItems(2);
        } else { // Desktop devices
            setVisibleItems(8);
        }
    }, [windowWidth]);
  
    const filteredProperties = properties.filter((property) => {
        const categoryMatch = category === "all" || property.category === category;
        const statusMatch = !status || property.status === status;
        return categoryMatch && statusMatch;
    });
  
    const handleStatusClick = (selectedStatus) => {
        setStatus((prevStatus) => (prevStatus === selectedStatus ? "" : selectedStatus));
    };
  
    const showAll = () => {
        setVisibleItems(filteredProperties.length); // Show all properties
    };
  
    const showLess = () => {
        setVisibleItems(windowWidth < 768 ? 2 : 8); // Show 2 on mobile or 8 on desktop
    };
  
    return (
        <div className="max-padd-container bg-gray-100 my-12 py-6 xl:py-20 overflow-y-hidden">
            <h3 className="h3 text-gray-700 text-center">OUR PROJECTS</h3>
            
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
                    Residential
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
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-4">
                {filteredProperties.slice(0, visibleItems).map((property, index) => (
                    <ProjectItem property={property} key={index} />
                ))}
            </div>

            {/* Show on Loading Data */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                {propertyLoading && 
                    Array.from({ length: 4 }, (_, index) => (
                        <div key={index} className="bg-gray-300 h-48 w-full rounded-lg"></div> // Loading placeholder
                    ))
                }
            </div>

            {/* Show when no match property found */}
            {filteredProperties.length === 0 && !propertyLoading && (
                <h3 className="h3 text-gray-700 text-center my-12">Not Found :(</h3>
            )}

            {/* Show More / Show Less Button */}
            <div className="flex justify-center mt-4">
                {visibleItems < filteredProperties.length && (
                    <button
                        onClick={showAll}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Show More
                    </button>
                )}
                {visibleItems > 2 && visibleItems < filteredProperties.length && (
                    <button
                        onClick={showLess}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-4"
                    >
                        View Less
                    </button>
                )}
            </div>
        </div>
    );
};

export const RepeatedElement = () => (
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
