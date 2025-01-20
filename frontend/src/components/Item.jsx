import React from 'react'
import { apiStore, BASE_URL } from '../store/apiHandler';
import { useNavigate } from 'react-router-dom';
import { Bath, Bed, CarFront, Ruler } from 'lucide-react';

const Item = ({ property }) => {
  const {modalOpen, setModalOpen} = apiStore();
  const navigate = useNavigate();
  const handleOnClick = () => {
    setModalOpen(true);
  }

  return (
    <div onClick={() => navigate(`../properties/${property.p_id}`)} className="rounded-2xl p-5 bg-white">
        <div className="pb-2 relative overflow-hidden rounded-xl">
            <img src={ BASE_URL + "/imgs/" + property.img } alt={property.title} className='bg-cover rounded-xl ease-in duration-300 hover:scale-110' loading='lazy' />
        </div>
        <h5 className="bold-16 my-1 text-secondary">{property.location}</h5>
        <h4 className="medium-18 line-clamp-1">{property.title}</h4>
        <p className="pt-2 mb-2 line-clamp-1">{property.status}</p>
        {/* info */}
        <div className='flex gap-x-2 py-2 line-clamp-1'>
          {property.bed && <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-2 font-[400] text-sm'><Bed size={20}/> {property?.bed}</div>}
          {property.bath && <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-2 font-[400] text-sm'><Bath size={20} /> {property?.bath}</div>}
          {property.parking && <div className='flexCenter gap-x-2 border-slate-900/50 pr-2 font-[400] text-sm'><CarFront size={20} /> {property?.parking}</div>}
        </div> 

        <p className="pt-2 mb-2 line-clamp-1">{property.description}</p>
        <p className="pt-1 mb-2 line-clamp-1">{property.address}</p>
        <div 
          className='btn-secondary rounded-xl shadow-sm mt-5 text-center hover:bg-indigo-800 cursor-pointer'>View Details</div>
    </div>
  );
};

export default Item;
