import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { apiStore, BASE_URL } from '../store/apiHandler';
import Map from '../components/Map';
import { HashLoader } from 'react-spinners';
import { Bath, Bed, CarFront, MapPin, Ruler } from 'lucide-react';

const Property = () => {
  const {pathname} = useLocation();
  const id = pathname.split('/').slice(-1)[0];
  const {propertyLoading, getProperty, isError, setModalOpen} = apiStore();
  const [property, setProperty] = useState({});


  useEffect(() => {
    const getData = async () => {
      setProperty(await getProperty(id));
    };
    getData();
  }, []);

  const handleOnClick = () => {
    console.log("handle one click ", property);
    setModalOpen(true, property.title);
  }

  if(propertyLoading){
    return (
      <div className=' h-screen flex items-center justify-center'>
        <HashLoader 
        height="80"
        width="80"
        radius={1}
        color="#4A90E2"
        aria-label='puff-loading'
        />
      </div>
    )
  }

  if(isError){
    return (
      <div className=' h-80 flex items-center justify-center'>
        Error while Fetching Data
      </div>
    )
  }
  
  return (
    <main className="max-padd-container my-[99px]">
      <div className="pb-2 relative">
          <img src={ BASE_URL + "/imgs/" + property?.img } alt={property?.title} className='bg-cover rounded-xl
          self-center max-h-[27rem] w-full object-cover' />
      </div>

      {/* conatiner */}
      <div className='grid grid-cols-1 mt-4 md:grid-cols-2 '>
        {/* left side */}
        <div>
          <h5 className="bold-16 my-1 text-secondary">{property?.location}</h5>
          <h4 className='flex justify-between flex-col md:flex-row pr-4'>
            <h4 className="bold-16 text-3xl">{property?.title}</h4>
            {/* <div className="bold-18 text-secondary my-4 md:my-0">{property?.price_title}</div> */}
          </h4>
          <div className='flex gap-4 py-2 flex-wrap'>
              {property.bed && <div className='flexCenter gap-2 border-r border-slate-900/50 pr-4 font-[500]'><Bed /> {property?.bed}</div>}
              {property.bath && <div className='flexCenter gap-2 border-r border-slate-900/50 pr-4 font-[500]'><Bath /> {property?.bath}</div>}
              {property.parking && <div className='flexCenter gap-2 border-r border-slate-900/50 pr-4 font-[500]'><CarFront /> {property?.parking}</div>}              
              {property.area && <div className='flexCenter gap-4 border-slate-900/50 pr-4 font-[500]'><Ruler /> {property?.area} </div>}
          </div> 
          <p className="pt-2 mb-2">{property?.description}</p>
          <p className="pt-2 mb-6 flex gap-2">
            <MapPin size={20} />
            <div>
            {property?.address}, {property?.city}, {property?.country}
            </div>
          </p>
          
          <div 
            onClick={handleOnClick}
            className='btn-secondary rounded-xl shadow-sm mt-5 text-center inline hover:bg-indigo-800 cursor-pointer'>Contact Us</div>
        </div>
        {/* right side */}
        <div className='flex-1'>
          <Map address={property?.address} city={property?.city} country={property.country ? property.country : 'India'} />
        </div>
      </div>
    </main>
  )
}

export default Property
