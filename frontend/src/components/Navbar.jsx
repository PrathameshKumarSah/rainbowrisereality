import React from 'react';
import { NavLink } from 'react-router-dom'
import {MdHomeWork, MdPermContactCalendar, MdArrowDropDown} from "react-icons/md"
import {RiCheckboxMultipleBlankFill} from "react-icons/ri"


const Navbar = ({ containerStyles }) => {
  

  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
         <MdHomeWork />
          <div className='font-bold text-lg '>Home</div>
        </NavLink>
        <NavLink to={"/allproject"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
       <RiCheckboxMultipleBlankFill />
          <div className='font-bold text-lg'>Project</div>
        </NavLink>
        <NavLink to={"/properties"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdPermContactCalendar />
          <div className='font-bold text-lg'>Properties</div>
        </NavLink>
        <NavLink to={"/about-us"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
        <MdHomeWork />
          <div className='font-bold text-lg'>About Us</div>
        </NavLink>
     
    </nav>
  )
}

export default Navbar

