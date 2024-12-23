import React from 'react'
import { Link } from 'react-router-dom'
import { BASE_URL } from '../store/apiHandler';
import { ADMIN_BASE_URL } from '../App';


const Item = ({ property }) => {
  return (
    <div className="rounded-2xl p-5 bg-white">
        <div className="pb-2 relative overflow-hidden rounded-xl">
            <img src={ BASE_URL + "/imgs/" + property.img} alt={property.title} className='bg-cover rounded-xl ease-in duration-300 hover:scale-110' />
            {/* like btn */}
            {/* <div className='absolute top-4 right-6'>
                <HeartBtn />
            </div> */}
        </div>
        <h5 className="bold-16 my-1 text-secondary">{property.location}</h5>
        <h4 className="medium-18 line-clamp-3">{property.title}</h4>
        {/* info */}
        {/* <div className='flex gap-x-2 py-2'>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBed /> {property.facilities.bedrooms}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineBathtub /> {property.facilities.bathrooms}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><MdOutlineGarage /> {property.facilities.parkings}</div>
            <div className='flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]'><CgRuler /> 400 </div>
        </div> */}
        <p className="pt-2 mb-2">{property.description}</p>
        <p className="pt-2 mb-2">{property.address}</p>
        {/* <div className='flexBetween'>
           
        </div> */}
        <div className="bold-18 mb-4">{property.price_title}</div>
{/*         <Link to={ADMIN_BASE_URL+'/view-properties'} className='btn-secondary rounded-xl shadow-sm mt-5'><button>Contact Us</button></Link> */}
              <div className='btn-secondary rounded-xl shadow-sm mt-5 text-center hover:bg-indigo-800 cursor-pointer'>Contact Us</div>

    </div>
  );
};

export default Item;
