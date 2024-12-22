import { useEffect, useState } from 'react'
import Searchbar from '../components/Searchbar'
import Item from '../components/Item'
import {apiStore} from "../store/apiHandler.js"


const Listing = () => {
  const {properties, getProperties} = apiStore();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredProducts = properties.filter(
    (property) =>
      property.title.toLowerCase().includes(searchTerm) ||
      property.description.toLowerCase().includes(searchTerm) || 
      property.location.toLowerCase().includes(searchTerm) ||
      property.category.toLowerCase().includes(searchTerm) ||
      property.address.toLowerCase().includes(searchTerm) ||
      property.price_range.toLowerCase().includes(searchTerm)
  );

  useEffect(() => {
      getProperties();
    }, []);

  return (
    <main className="max-padd-container my-[99px]">
      <div className="max-padd-container py-10 xl:py-22 bg-primary rounded-3xl">
        <div className='sm:flex gap-x-6'>
          <Searchbar handleSearch={handleSearch} />
          {/* container */}
          <div className={filteredProducts.length === 0 ? 'sm:w-[75%]' : "sm:w-[75%] grid gap-6 grid-cols-1 md:grid-cols-2 xl:grid-cols-3"}>
            {
              filteredProducts.map((property)=> (
                 <Item  key={property.p_id} property={property} /> 
                ))
            }
            {filteredProducts.length === 0 && (
            <p className="text-center text-xl text-gray-500 mt-4">No properties found for the selected filters.</p>
          )}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Listing