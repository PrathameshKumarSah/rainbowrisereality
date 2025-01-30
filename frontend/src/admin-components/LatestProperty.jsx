import React, {useState, useEffect} from 'react'
import { apiStore, BASE_URL } from '../store/apiHandler';
import { Link } from 'react-router-dom';
import { ADMIN_BASE_URL } from '../App';
import {  MoveRight } from 'lucide-react';
import { PuffLoader } from 'react-spinners';

const LatestProperty = () => {
    const [propertiesDetails, setPropertiesDetails] = useState([]);
    const [propertyData, setPropertyData] = useState([]);
    const {properties, latestProperties, propertyLoading} = apiStore();
    
    useEffect(() => {
      latestProperties();
    }, [])

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
    <div className="rounded-lg bg-white-100 p-3">
        <div className='text-l font-semibold p-3'>Our Latest Properties</div>
      <div className='sm:flex gap-x-12 border-t py-4'>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {
              properties.map((property)=> (
                //  <Item  key={property.p_id} property={property} /> 
                 <div  key={property.p_id} className="rounded-2xl p-5 bg-primary">
                    <div className="pb-2 relative overflow-hidden rounded-xl">
                        <img src={ BASE_URL + "/imgs/" + property.img} alt={property.title} className='bg-cover rounded-xl ease-in duration-300 hover:scale-110' />
                    </div>
                    <h5 className="bold-16 my-1 text-indigo-600">{property.location}</h5>
                    <h4 className="medium-18 line-clamp-3">{property.title}</h4>
                    <p className="pt-2 mb-2">{property.description}</p>
                    <p className="pt-2 mb-2">{property.address}</p>
                    {/* <div className="bold-18 mb-4">{property.price_title}</div> */}
                </div>
                ))
            }
          </div>
        </div>
        <Link to={ADMIN_BASE_URL+'/view-properties'} className='group flex text-lg justify-center items-center rounded-xl text-indigo-800 transition-all' > View More <MoveRight size={20} className='ml-1 transform group-hover:translate-x-1 transition-transform duration-300' /></Link>
    </div>
  )
}

export default LatestProperty
