import { Search } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";

const HeroSearchBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Residential");
  const dropdownRef = useRef(null);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[1].value===''){ return ;}
    alert("clicked search");
    console.log(e.target[1].value);
    e.target[1].value = '';
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
      <form onSubmit={handleSubmit} className="flex gap-1 items-center w-full md:w-3/4 lg:w-2/3 shadow-md text-sm ">
        {/* Dropdown */}
        <div className="relative w-1/3" ref={dropdownRef}>
          <button
            className="w-full px-1 md:px-4 py-3 md:py-4 text-left bg-white rounded hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-800 flex justify-between items-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="font-bold">{selectedOption}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 transition-transform ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 011.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute z-10 mt-1 w-full border bg-white border-gray-200 rounded-md shadow-lg">
              <li
                className="px-4 py-2 hover:bg-gray-500 hover:text-white cursor-pointer border-b"
                onClick={() => {
                  setSelectedOption("Residential");
                  setDropdownOpen(false);
                }}
              >
                Residential
              </li>
              <li
                className="px-4 py-2 hover:bg-gray-500 hover:text-white cursor-pointer"
                onClick={() => {
                  setSelectedOption("Commercial");
                  setDropdownOpen(false);
                }}
              >
                Commercial
              </li>
            </ul>
          )}
        </div>

        {/* Search Input */}
        <input
          type="text"
          className="w-full px-4 py-3 md:py-4 border-l placeholder-black border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search projects or properties..."
        />

        {/* Search Button */}
        <button
          className="flex gap-2 px-2 md:px-6 py-3 md:py-4 text-white font-medium rounded bg-blue-900 transition duration-300 hover:bg-blue-950 hover:-translate-y-1"
        >
        <Search size={20} />
          <span className="hidden font-bold md:inline">SEARCH</span>
        </button>
      </form>
  );
};

export default HeroSearchBar;
