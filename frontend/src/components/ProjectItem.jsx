import React from 'react'
import { BASE_URL } from '../store/apiHandler';
import { useNavigate } from 'react-router-dom';
import { Bed, MapPin, Ruler } from 'lucide-react';

const ProjectItem = ({ property }) => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`../project/${property.id}`)} className="rounded-2xl p-5 bg-white">
        <div className="pb-2 relative overflow-hidden rounded-xl h-32">
            <img src={property?.imgs && BASE_URL + property?.imgs.split(',')[0] } alt={property.title} className='bg-cover rounded-xl ease-in duration-300 hover:scale-110' loading='lazy' />
        </div>
        <h5 className="bold-16 my-1 text-secondary line-clamp-1">{property.location}</h5>
        <h4 className="medium-18 line-clamp-1">{property.title}</h4>
        <p class Name="pt-2 mb-2 line-clamp-1">{property.status}</p>
        {/* info */}
        <div className='flex gap-x-2 py-2 line-clamp-1'>
          {property.rooms && <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-2 font-[400] text-sm'><Bed size={20}/> {property?.rooms}</div>}
          {property.area_size && <div className='flexCenter gap-x-2 border-slate-900/50 pr-2 font-[400] text-sm'><Ruler size={20} /> {property?.area_size}</div>}
          
        </div> 

        <p className="pt-2 mb-2 line-clamp-1">{property.about}</p>
        <p className="pt-1 mb-2 line-clamp-1 flex items-center"> <MapPin size={20} /> &nbsp; {property.location}</p>
        
        <div 
          className='btn-secondary rounded-xl shadow-sm mt-5 text-center hover:bg-indigo-800 cursor-pointer'>View Details</div>
    </div>
  );
};

export default ProjectItem;


