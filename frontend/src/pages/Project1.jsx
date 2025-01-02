import React from 'react'
import Skaback from '../assets/skad.png'
import Skaback1 from '../assets/destiny.jpg'
import sak1 from '../assets/sak2.jpg'
import sak2 from '../assets/sak3.jpg'
import sak3 from '../assets/sak4.jpg'
import sak4 from '../assets/sak5.jpg'
import Alpha from '../assets/alpha.png'
import Gamma from '../assets/gamma.png'
import Buy from '../assets/buy.jpg'
import { Link } from 'react-router-dom'
import Lobby from '../assets/lobby.jpg'
import Lounge from '../assets/lounge.jpg'
import Hall from '../assets/hall.png'
import Golf from '../assets/golfs.jpg'
import Yoga from '../assets/yoga.webp'
import Indoor from '../assets/indoor.jpg'
import Card from '../assets/card.jpeg'
import Center from '../assets/center.jpg'
import Dance from '../assets/dance.jpg'
import Multi from '../assets/mukti.jpg'
import Swimms from '../assets/swimms.jpg'
import Sports from '../assets/sports.jpg'



const Project1 = () => {

    const images = [
       {
         src: [Buy], // Replace with your image paths
         alt: 'Image 1',
         title: 'SKA Highlight',
         description: 'Total 3 Tower [ Alpha , Beta , Gamma ]',
         description1: 'No. Of Flats pr Floor = (Alpha) 4 units  / (Gamma & Beta) 8 units',
         description2: 'No. Of Lifts pr Block = 4 lift ( Alpha ) / 6 Lift ( Beta & Gamma )',
         description3: 'No. Of Floors  2Basements(Parking)+ Ground (Double height Club ) + 34',
         description4: 'Total No. Of Flats = 645',
         description5: 'Possession Date According to RERA 2029 ',
       },
       // Add more images here as needed
     ];

  return (
    <div>
     <div className="relative h-[800px]">
         {/* Background Image */}
         <div
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${Skaback})` }}
         ></div>
       </div>
      <section className=" pb-[20px] md:pb-[50px]" id="resale">
          <div className=" w-11/12 md:w-10/12 mx-auto">
          <div
        className="">
                  <div className="">
                      <h2 className="md:text-[40px] text-center md:leading-tight text-3xl mt-3 font-normal"><br />  <span className=" font-medium text-center text-[44px]">SKA</span> Destiny One</h2></div>
                      <h2 className='text-center font-medium text-larger mt-3'>Sec-Zeta 1, Greater Noida </h2>
                      <h2 className='text-center font-bold text-2xl mt-3'>Size & Price </h2>
              </div>
              <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2 gap-x-3 md:gap-y-10 gap-y-5 md:gap-x-10 pt-[50px]">
                  <div className="col-span-1">
                      <div className="relative">
                      <div
        className="h-[400px] relative bg-black bg-opacity-50 z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay"
        style={{
          backgroundImage: `url(${sak1})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      <div 
          className="absolute inset-0 bg-black bg-opacity-50"
        ></div>
                              <div className="absolute z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay">
                                  <div className=" pb-3">
                                      <h2 className="text-3xl text-center font-medium pb-5"> 3BHK (1603 Sq.ft)
                                      </h2>
                                      <p className="text-4xl text-center font-medium pb-12 text-white">1.48cr</p>
                                  </div>
                                  <div className="flex justify-center pb-5">
                                      <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                          <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2">ENQUIRE NOW</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-1">
                      <div className="relative">
                          <div   className="h-[400px] relative bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${sak2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div 
          className="absolute inset-0 bg-black bg-opacity-50"
        ></div>
                              <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                                  <div className=" pb-3">
                                      <h2 className="text-3xl text-center font-medium pb-7"> 3BHK (1757 Sq.ft)
                                      </h2>
                                      <p className="text-4xl text-center font-medium pb-12 text-white">1.64cr</p>
                                  </div>
                                  <div className="flex justify-center pb-5">
                                      <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                          <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2">ENQUIRE NOW</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-1">
                      <div className="relative">
                      <div   className="h-[400px] relative bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${sak3})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div 
          className="absolute inset-0 bg-black bg-opacity-50"
        ></div>
                              <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                                  <div className=" pb-3">
                                      <h2 className="text-3xl text-center font-medium pb-7">3BHK+U (2107 Sq.ft)
                                      </h2>
                                      <p className="text-4xl text-center font-medium pb-12 text-white">1.95cr</p>
                                  </div>
                                  <div className="flex justify-center pb-5">
                                      <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                          <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2">ENQUIRE NOW</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-1">
                      <div className="relative">
                      <div   className="h-[400px] relative bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${sak4})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <div 
          className="absolute inset-0 bg-black bg-opacity-50"
        ></div>
                              <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                                  <div className=" pb-3">
                                      <h2 className="text-3xl text-center font-medium pb-7">4BHK+U+Study (3007 Sq.ft)
                                      </h2>
                                      <p className="text-4xl text-center font-medium pb-12 text-white">2.93cr</p>
                                  </div>
                                  <div className="flex justify-center pb-5">
                                      <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                          <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2">ENQUIRE NOW</button>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
      <h2 className='text-center font-bold text-2xl pb-20 '>Note : + Extra Charges</h2>

      <section>
  
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 ">
        {images.map((image, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            
            <img
              src={image.src}
              alt={image.alt}
              className="w-50% h-70 object-cover"
            />
            <div className="p-4">
              <h2 className="text-3xl font-semibold text-center sm:text-left mb-3">{image.title}</h2>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description}</p>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description1}</p>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description2}</p>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description3}</p>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description4}</p>
              <p className="text-2xl text-gray-600 mb-4 text-center sm:text-left">{image.description5}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>
    <div className="flex justify-center items-center w-full mb-6 md:mb-6">
                  <img
                    src={Skaback1}
                    alt="Rise Resort Residences"
                    className="w-100 h-100 object-cover"
                  />
       </div>
           <div className="max-padd-container p-8 mt-20">
             <h1 className="text-4xl font-bold text-center mb-6">Price List</h1>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {/* First Row with Crest V1 and Crest V2 */}
               <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                 <h2 className="text-xl font-semibold p-4">ALPHA & BETA TOWER</h2>
                <Link to={'/alpha'}> <img src={Alpha} alt="Crest Floor Plan V1" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" /></Link>
               </div>
               <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
                 <h2 className="text-xl font-semibold p-4">GAMMA TOWER</h2>
                <Link to={'/alpha1'}> <img src={Gamma} alt="Crest Floor Plan V2" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" /></Link>
               </div>
             </div>
           </div>

      {/* Club facility */}
      <h1 className="text-black text-4xl font-bold text-center mb-6 overflow-y-hidden">
    Club Facilities💫
  </h1>
           <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-xl text-white px-2 pt-4'>Double Height Reception Lobby</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Lobby}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Lounge & Av Room 
          </p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Lounge}
          alt='/'
        />
      </div>
      {/* Card */}
      <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Community hall & Party Lawn 
          </p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Hall}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Virtual Golf</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Golf}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Indoor & Outdoor Sports Zone / Teenager Zone with Gaming Area </p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Indoor}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Card Room & Library 
          </p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Card}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Business Center & conference Room</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Center}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Early year/Dance/Music/Activity Room
          </p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Dance}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Multipurpose Terrace</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Multi}
          alt='/'
        />
      </div>
        {/* Card */}
        <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Swimming Pool</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Sports}
          alt='/'
        />
      </div>
          {/* Card */}
          <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Sports</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Swimms}
          alt='/'
        />
      </div>
         {/* Card */}
         <div className='rounded-xl relative'>
        {/* Overlay */}
        <div className='absolute w-full h-full bg-black/20 rounded-xl text-white'>
          <p className='font-bold text-2xl text-white px-2 pt-4'>Sports</p>
          
        </div>
        <img
        className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl'
          src={Yoga}
          alt='/'
        />
      </div>
    </div>
    </div>
  )
}

export default Project1
