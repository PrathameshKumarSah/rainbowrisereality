import React from 'react';
import Marquee from 'react-fast-marquee';
import img1 from '../assets/prestige.png';
import img2 from '../assets/gaurs.png';
import img3 from '../assets/green.png';
import img4 from '../assets/ace logo.png';
import img5 from '../assets/SKA India.png';
import img6 from '../assets/Goorej.png';
import img7 from '../assets/m3m.png';

const BuilderAssociations = () => {
   

    return (
        <div className=" text-center mt-[50px]">
        <div className=" mb-[50px]">
             {/* Header Section */}
             <div className="text-center mb-8">
                <h2 className="text-2xl md:text-4xl font-extrabold text-[#000000]">
                    Builders associated with
                </h2>
                <p className="text-gray-500 mt-2 text-sm md:text-xl">
                    More than 15,000+ builder trusted Book Your Keys
                </p>
            </div>
        </div>
        <div>
          <Marquee direction="right" speed={300} delay={4}>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img1} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img2} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img3} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img4} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img5} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img6} alt="" />
            </div>
            <div className="mx-[20px] my-0">
              <img className='w-[40%]' src={img7} alt="" />
            </div>
          </Marquee>
        </div>
      </div>
    );
};

export default BuilderAssociations;
