import React, {useState, useEffect} from 'react'
import Axios from 'axios'
import Item from  "./Item"
import { ArrowDownNarrowWide, ArrowUpNarrowWide, ChevronDown } from "lucide-react";
import { BASE_URL } from '../store/apiHandler';

const ViewProperty = () => {
    const [propertiesDetails, setPropertiesDetails] = useState([]);
    const [propertyData, setPropertyData] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");

    propertiesDetails.map((item) => console.log(item));
  
    const handleSearch = (e) => {
      setSearchTerm(e.target.value.toLowerCase());
    };
  
    const handleSort = () => {
      const sortedProducts = [...propertiesDetails].sort((a, b) => {
        return sortOrder === "asc" ? Number(a.price) - Number(b.price) : Number(b.price) - Number(a.price);
      });
      // setProducts(sortedProducts);
      setPropertiesDetails(sortedProducts);
      setSortOrder(sortOrder === "asc" ? "desc" : "asc");
    };
  
    const filteredProducts = propertiesDetails.filter(
      (property) =>
        property.title.toLowerCase().includes(searchTerm) ||
        property.description.toLowerCase().includes(searchTerm) || 
        property.location.toLowerCase().includes(searchTerm) ||
        property.category.toLowerCase().includes(searchTerm) ||
        property.address.toLowerCase().includes(searchTerm)
    );

    const getData = async () =>{
      try{
        const res = await Axios.get(BASE_URL+'/api/properties');
        setPropertiesDetails(res.data);
        console.log(res.data);
        setPropertyData(res.data);
      }catch{
        console.log("Error in getting properties details.");
      }
    }
    // getData();
    useEffect(() => {
      getData();
    }, [])

  return (
      <div className="container xl:py-6 rounded-3xl">
        {/* Container Topbar */}
        <div className='flex flex-wrap items-center p-3 gap-6 w-full mt-4'>
          <button
           onClick={handleSort}
           className='
            relative flex items-center py-3 px-4 my-1
            font-medium rounded-md cursor-pointer
            group bg-indigo-600 text-white from-indigo-200 to-indigo-100 hover:bg-indigo-500 transition-all duration-300'>
            {/* Sort Price &nbsp;
            <ArrowUp size={20} /> */}
            Sort Price: {sortOrder === "asc" ? <ArrowUpNarrowWide size={20} /> : <ArrowDownNarrowWide size={20} />}
          </button>
          
          <input
            id="search-title"
            name="search-title"
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="rounded-md bg-white px-3 py-3 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-300 sm:text-sm/6"
            placeholder="Search By Title or description"
          />
        </div>
        {/* container */}
        <div className='sm:flex gap-x-12 border-y py-4'>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {
              filteredProducts.map((property)=> (
                 <Item  key={property.p_id} property={property} /> 
                ))
            }
          </div>
          {filteredProducts.length === 0 && (
            <p className="text-center text-gray-500 mt-4">No Property found.</p>
          )}
        </div>

        {/* preious and next properties section */}
        <div className='flex flex-wrap items-center p-3 gap-6 w-full mt-4'>
          <button className='
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'>
          Previous</button>
          <div>Page {1} of {2}</div>
          <button className='
            relative flex items-center py-2 px-3 my-1
            font-medium rounded-md cursor-pointer
            transition-colors group
            bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800'>
              Next</button>
            <div className="mt-2 grid grid-cols-1">
              <select
                id="show-page"
                name="show-page"
                className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              >
                <option value={10}>Show 10</option>
                <option value={20}>Show 20</option>
              </select>
              
              <ChevronDown 
                aria-hidden="true"
                className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
              />
            </div>
        </div>

      </div>
  )
}

export default ViewProperty