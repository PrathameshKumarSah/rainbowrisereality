import React, {useState, useEffect} from 'react'
import Item from  "./Item"
import { ArrowDownNarrowWide, ArrowUpNarrowWide } from "lucide-react";
import { apiStore } from '../store/apiHandler';
import { PuffLoader } from 'react-spinners';

const ViewProperty = () => {
  const {properties, getProperties, propertyLoading} = apiStore();
    const [propertiesDetails, setPropertiesDetails] = useState(properties);
    // const [propertyData, setPropertyData] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("asc");
  
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

   useEffect(() => {
      getProperties();
    }, []);

    useEffect(() => {
      setPropertiesDetails(properties);
    }, [properties]);
  
    if(propertyLoading){
      return (
        <div className='h-72 flex items-center justify-center'>
          <PuffLoader 
          height="80"
          width="80"
          radius={1}
          color="#555"
          aria-label='puff-loading'
          />
        </div>
      )
    }

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


      </div>
  )
}

export default ViewProperty
