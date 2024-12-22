import React, { useState } from 'react'

const Searchbar = ({handleSearch}) => {
    const [selectedCity, setSelectedCity] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedPriceRange, setSelectedPriceRange] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleIptChange = (e) => {
        setSearchTerm(e.target.value);
        handleSearch(e);
    }

    const handleCityChange = (e) => {
        setSelectedCity(e.target.value);
        handleSearch(e);
    }

    const handleCategory = (e) => {
        setSelectedCategory(e.target.value);
        handleSearch(e);
    }

    const handlePriceRange = (e) => {
        setSelectedPriceRange(e.target.value);
        handleSearch(e);
    }

    

  return (

    <div className="sm:w-[25%] bg-white rounded-2xl mb-5">
    <div className="sm:p-2 p-4 md:p-[30px]">
        <h2 className="font-montserrat font-extrabold text-2xl">Properties</h2>
        <input
            id="search-title"
            name="search-title"
            type="text"
            value={searchTerm}
            onChange={handleIptChange}
            className="rounded-md bg-white px-3 py-3 w-full mt-5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-300 sm:text-sm/6"
            placeholder="Search By Title or description"
          />
        <div className="border border-[#E3E3E3] w-full my-3">
            <h3 className="pt-3 px-3">Location</h3>
            <select className="text-sm w-full py-2 safari-1  p-3 font-medium focus-visible:focus-within:border text-[#6C6B6B]"  value={selectedCity} onChange={handleCityChange}>
                <option value="">Select your city</option>
                <option value="Noida">Noida</option>
                <option value="Greater Noida">Greater Noida</option>
                <option value="Noida Extension">Noida Extension</option>
                <option value="Noida Expressway">Noida Expressway</option>
            </select>
        </div>
        <div className="border border-[#E3E3E3] w-full  mb-3">
            <h3 className="pt-3 px-3">Type</h3>
            <select className="text-sm w-full py-2 safari-1  p-3 font-medium font-montserrat focus-visible:focus-within:border text-[#6C6B6B]" value={selectedCategory} onChange={handleCategory}>
                <option value="">Select property type</option>
                <option value="Residential">Residential</option>
                <option value="Apartment's">Apartment's</option>
                <option value="Villas">Villas</option>
            </select>
        </div>
        <div className="border border-[#E3E3E3] w-full  mb-3">
            <h3 className="pt-3 px-3">Price Range</h3>
            <select className="text-sm w-full py-2 safari-1  p-3 font-medium font-montserrat focus-visible:focus-within:border text-[#6C6B6B]" value={selectedPriceRange} onChange={handlePriceRange}>
                <option value="">Select price range</option>
                <option value={"Below 50L"}>Below 50L</option>
                <option value={"50L - 1CR"}>50L - 1CR</option>
                <option value={"1CR - 2CR"}>1CR - 2CR</option>
                <option value={"2CR - 3CR"}>2CR - 3CR</option>
                <option value={"Above 3CR"}>Above 3CR</option>
            </select>
        </div>
    </div>
</div>
  )
}

export default Searchbar