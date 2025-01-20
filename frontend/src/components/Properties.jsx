import React, { useEffect, useState } from 'react'
import Item from './Item'
import {apiStore} from "../store/apiHandler.js"
import {HashLoader} from "react-spinners"
import { ChevronDown, ChevronUp } from 'lucide-react'


const Properties = () => {
    const {properties, getProperties, propertyLoading} = apiStore();

    useEffect(() => {
        getProperties();
      }, [])  
    
    const [activeFilter, setActiveFilter] = useState('all');
    const [activeCategory, setActiveCategory] = useState('residential');
    const [dropdownOpen, setDropdownOpen] = useState({ residential: false, commercial: false });
  
    const handleFilterClick = (filter, category) => {
      setActiveFilter(filter);
      setActiveCategory(category);
      setDropdownOpen({ ...dropdownOpen, [category]: false });
    };
  
    const filteredProperties =
      activeFilter === 'all'
        ? properties
        : properties.filter(
            (property) =>
              property.category === activeCategory && property.status === activeFilter
          );
  
      
    if(propertyLoading){
    return (
        <div className='h-72 flex items-center justify-center'>
        <HashLoader 
        height="80"
        width="80"
        radius={1}
        color="#4A90E2"
        aria-label='puff-loading'
        />
        </div>
    )
    }
    
    return (
        <div className="max-padd-container bg-secondary my-12 py-6 xl:py-20 rounded-3xl  overflow-y-hidden">
            <h2 className='h2 text-white text-center'>OUR PROJECTS</h2>
            <div className="flex items-center justify-center space-x-4 mb-6">
                {/* All Button */}
                <button
                    onClick={() => setActiveFilter('all')}
                    className={`px-4 py-2 rounded border hover:bg-gray-200 ${
                    activeFilter === 'all' ? 'bg-gray-200' : 'bg-white'
                    }`}
                >
                    All
                </button>

                {/* residential Dropdown */}
                <div className="relative">
                    <button
                    onClick={() =>
                        setDropdownOpen((prev) => ({
                        ...prev,
                        residential: !prev.residential,
                        }))
                    }
                    className={`px-4 py-2 rounded border flex items-center hover:bg-gray-200 ${
                        activeCategory === 'residential' && activeFilter !== 'all'
                        ? 'bg-gray-200'
                        : 'bg-white'
                    }`}
                    >
                    Residential
                    <span className="ml-2">
                        {dropdownOpen.residential ? <ChevronUp /> : <ChevronDown />}
                    </span>
                    </button>
                    {dropdownOpen.residential && (
                    <div className="absolute bg-white shadow-md rounded w-full mt-2 z-20">
                        {['Ready to Move', 'Under Construction', 'Upcoming'].map((status) => (
                        <button
                            key={status}
                            onClick={() => handleFilterClick(status, 'residential')}
                            className={`block w-full text-left px-4 py-2 ${
                            activeFilter === status && activeCategory === 'residential'
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-gray-200'
                            }`}
                        >
                            {status}
                        </button>
                        ))}
                    </div>
                    )}
                </div>

                {/* Commercial Dropdown */}
                <div className="relative">
                    <button
                    onClick={() =>
                        setDropdownOpen((prev) => ({
                        ...prev,
                        commercial: !prev.commercial,
                        }))
                    }
                    className={`px-4 py-2 rounded border flex items-center hover:bg-gray-200 ${
                        activeCategory === 'commercial' && activeFilter !== 'all'
                        ? 'bg-gray-200'
                        : 'bg-white'
                    }`}
                    >
                    Commercial
                    <span className="ml-2">
                        {dropdownOpen.commercial ? <ChevronUp /> : <ChevronDown />}
                    </span>
                    </button>
                    {dropdownOpen.commercial && (
                    <div className="absolute bg-white shadow-md rounded w-full mt-2 z-20">
                        {['Ready to Move', 'Under Construction', 'Upcoming'].map((status) => (
                        <button
                            key={status}
                            onClick={() => handleFilterClick(status, 'commercial')}
                            className={`block w-full text-left px-4 py-2 ${
                            activeFilter === status && activeCategory === 'commercial'
                                ? 'bg-blue-500 text-white'
                                : 'hover:bg-gray-200'
                            }`}
                        >
                            {status}
                        </button>
                        ))}
                    </div>
                    )}
                </div>
            </div>

            {/* Property Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5  gap-4">
            {filteredProperties.map((property, index) => (
                <Item property={property} />
            ))}
            </div>
            {filteredProperties.length==0 && <h3 className='h3 text-white text-center my-12'>Empty...</h3>}
        </div>
);
}

export default Properties
