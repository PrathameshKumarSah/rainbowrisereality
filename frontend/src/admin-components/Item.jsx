import { Edit, Trash2, MoveRight } from 'lucide-react';
import React from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { ADMIN_BASE_URL } from '../App';
import { BASE_URL } from '../store/apiHandler';
import RemoveProperty from './RemoveProperty';

const Item = ({ property }) => {
  const navigate = useNavigate();
  return (
    <div className="rounded-2xl p-5 bg-primary">
        <div className="pb-2 relative overflow-hidden rounded-xl">
            <img src={ BASE_URL+"/imgs/" + property.img} alt={property.title} className='bg-cover rounded-xl ease-in duration-300 hover:scale-110' />
            </div>
        <h5 className="bold-16 my-1 text-indigo-600">{property.location}</h5>
        <h4 className="medium-18 line-clamp-3">{property.title}</h4>
        <p className="pt-2 mb-2">{property.description}</p>
        <p className="pt-2 mb-2">{property.address}</p>
        {/* {property.price} */}

        <div className="bold-18 mb-4">{property.price_title}</div>
        <div className='flex flex-col'>
          {/* view details */}
          <div onClick={() => navigate(`../../properties/${property.p_id}`)} className='rounded-xl shadow-sm mt-2 bg-indigo-600 text-white py-2 flex justify-center items-center cursor-pointer hover:bg-indigo-800'>View Details&nbsp;<MoveRight size={20}/></div>
          {/* remove and edir btn */}
          <div className='grid grid-cols-2 gap-4'>
            <RemoveProperty id={property.p_id} />
            <Link to={ADMIN_BASE_URL + '/update-property/'+property.p_id} className='rounded-xl shadow-sm mt-2 bg-indigo-600 text-white flex justify-center items-center hover:bg-indigo-800'>
              <Edit size={20} /> &nbsp;
              <button>Edit</button>
            </Link>
          </div>
        </div>
    </div>
  );
};

export default Item
