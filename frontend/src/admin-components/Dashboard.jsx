import React from 'react'
import LatestProperty from './LatestProperty'
import { apiStore } from '../store/apiHandler'
import { Link } from 'react-router-dom';
import { ADMIN_BASE_URL } from '../App';

const Dashboard = () => {
  const {totalProperties, totalProjects, projects, totalenq} = apiStore();
  return (
    <div>
      <div className='flex flex-col gap-4 md:flex-row m-4'>
        <Link to={ADMIN_BASE_URL+"/view-projects"} className="
          px-4 py-4 flex items-center rounded-xl text-white font-medium 
      bg-gradient-to-br from-purple-500 to-pink-500 
      hover:from-pink-500 hover:to-purple-500 
      transition-colors duration-300 ease-in-out 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
        ">
          <div className='w-[75%] text-2xl font-bold text-gray-100'>Total Projects</div>
      
          <div className='w-[25%] text-4xl font-bold'>{totalProjects}</div>
        </Link>

        <Link to={ADMIN_BASE_URL+"/view-properties"} className="
          px-4 py-4 flex items-center rounded-xl text-white font-medium 
      bg-gradient-to-br from-purple-500 to-pink-500 
      hover:from-pink-500 hover:to-purple-500 
      transition-colors duration-300 ease-in-out 
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 
        ">
          <div className='w-[75%] text-2xl font-bold text-gray-100'>Total Properties</div>
      
          <div className='w-[25%] text-4xl font-bold'>{totalProperties}</div>
        </Link>
      </div>

      {/* Latest Property Section */}
      <LatestProperty />
    </div>
  )
}

export default Dashboard
