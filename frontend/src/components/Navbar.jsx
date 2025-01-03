import React from 'react'
import { NavLink } from 'react-router-dom'
import {MdHomeWork, MdPermContactCalendar} from "react-icons/md"
import {RiCheckboxMultipleBlankFill} from "react-icons/ri"


const Navbar = ({ containerStyles }) => {

  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={"/"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <MdHomeWork />
          <div>Home</div>
        </NavLink>
        <NavLink to={"/properties"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <RiCheckboxMultipleBlankFill />
          <div>Properties</div>
        </NavLink>
        <NavLink to={"/about-us"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <MdPermContactCalendar />
          <div>About Us</div>
        </NavLink>
         <NavLink to={"/godrej"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <MdHomeWork />
          <div>Godrej</div>
        </NavLink>
        <NavLink to={"/ska"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <MdHomeWork />
          <div>SKA</div>
        </NavLink>
        <NavLink to={"/three-page"} className={({isActive})=> isActive ? "active-link flexCenter gap-x-1 rounded-full p-2" : "flexCenter gap-x-1 rounded-full px-2 py-1"}>
          <MdHomeWork />
          <div>Three Page</div>
        </NavLink>
    </nav>
  )
}

export default Navbar
