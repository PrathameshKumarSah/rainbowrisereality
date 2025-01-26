import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const SidebarItem = ({
  icon,
  label,
  dropdownItems = [],
  isOpen,
  openDropdown,
  onDropdownToggle,
  itemIndex
}) => {

  const hasDropdown = dropdownItems.length > 0;

  return (
    <div className="flex flex-col">
    {/* {hasDropdown ?} */}
      {/* Main Item */}
      <div
        className={`p-4 m-1 rounded-md flex items-center cursor-pointer text-gray-300 hover:text-white hover:bg-gray-700 ${
          isOpen ? "justify-between" : "justify-center"
        }`}
        onClick={hasDropdown ? onDropdownToggle : null}
      >
        {isOpen && 
          <div className="flex items-center">
            <span className="text-2xl">{icon}</span>
            <span className="ml-4">{label}</span>
          </div> 
        }
        {hasDropdown && isOpen && (
          <span>{openDropdown && openDropdown==itemIndex ? <IoIosArrowUp /> : <IoIosArrowDown  />}</span>
        )}
      </div>

      {/* Dropdown */}
      {hasDropdown && openDropdown==itemIndex && isOpen && (
        <div className="bg-gray-700 ml-12 mx-5 rounded-md">
          {dropdownItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="block py-2 px-4 m-1 cursor-pointer rounded-sm text-gray-300 hover:bg-gray-600 hover:text-white"
            >
              {item.name}
              {/* <IoIosArrowForward /> */}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SidebarItem;
