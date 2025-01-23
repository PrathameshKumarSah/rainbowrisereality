import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'
import {MdHomeWork, MdPermContactCalendar, MdArrowDropDown} from "react-icons/md"
import {RiCheckboxMultipleBlankFill} from "react-icons/ri"


const Navbar = ({ containerStyles }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);
  const openDropdown = () => setDropdownOpen(true);

  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
         <MdHomeWork />
          <div className='font-bold text-lg '>Home</div>
        </NavLink>
        <NavLink to={"/properties"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
       <RiCheckboxMultipleBlankFill />
          <div className='font-bold text-lg'>Properties</div>
        </NavLink>
        <NavLink to={"/about-us"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdPermContactCalendar />
          <div className='font-bold text-lg'>About Us</div>
        </NavLink>
        <div className="relative">
        <div
          className="flexCenter gap-x-1 rounded-full px-2 py-1 cursor-pointer"
          onClick={toggleDropdown}
          
        >
        <NavLink to={"/allproject"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}
        onClick={openDropdown}>
        <MdHomeWork />
        <div className='font-bold text-lg '>Projects</div>
        <MdArrowDropDown />
        </NavLink>
        </div>

        {dropdownOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white shadow-md w-100 h-100 medium-16 ring-1 ring-slate-800/5 z-50">
           <NavLink
              to="/allproject"
              className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}
              onClick={closeDropdown}
            >
             <div className='font-bold text-lg'>All Projects</div>
            </NavLink>  
             <NavLink
              to="/residential"
              className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}
              onClick={closeDropdown}
            >
            <div className='font-bold text-lg'>Residential</div>
            </NavLink> 
             <NavLink
              to="/commercial"
              className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}
              onClick={closeDropdown}
            >
             <div className='font-bold text-lg'>Commercial</div>
            </NavLink> 
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

