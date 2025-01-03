import React from 'react'
import Back from '../assets/back.png'
import Club from '../assets/club.jpg'
import Residence from '../assets/residence.jpg'
import Garden from '../assets/garden.jpg'
import Green from '../assets/green.jpg'
import Maps from '../assets/map creast.png'
import Maps1 from '../assets/map creast2.png'
import Evoke from '../assets/evoke1.png'
import Evokes from '../assets/evoke2.png'
import Windsor1 from '../assets/windsor1.png'
import Windsor2 from '../assets/windsor2.png'
import Connect from '../assets/connect.jpg'
import Tech from '../assets/tech.jpg'
import Eco from '../assets/eco.jpg'
import Design from '../assets/desiging.jpg'
import Finish from '../assets/finish.jpg'
import Vastu from '../assets/vastu.png'
import Marvel from '../assets/marvel.png'
import Party from '../assets/party.png'
import Swimms from '../assets/swims.png'
import Story1 from '../assets/story1.jpg'
import Story2 from '../assets/story2.jpg'
import Godrej from '../assets/godrej1.jpg'
import Godrej2 from '../assets/godrej2.jpg'
import Godrej3 from '../assets/godrej3.jpg'
import Godrej4 from '../assets/godrej4.jpg'
import Godrej5 from '../assets/godrej5.webp'
import userIcon from '../assets/user.svg'
import { apiStore } from '../store/apiHandler'
import {Link } from 'react-router-dom'
// import Sliders from '../constant/Sliders'

const Project = () => {
  const images = [
    {
      src: [Godrej5], // Replace with your image paths
      alt: 'Image 1',
      title: ' Luxurious 3,4BHK Apartments Located in Sec-44,Noida',
      description: 'Land 6.45 Acer',
      description1: '2 Side Open Plot ',
      description2: '3‐4 Tower 416 Unit ( Approximately) ',
      description3: 'Height G+23',
      description4: 'Theme Based Project',
    },
    // Add more images here as needed
  ];

  const { setModalOpen} = apiStore();

  const handleOnClick = () => {
    setModalOpen(true, 'GODREJ PROPERTIES');
  }

  return (
    <div>
      <div className="fixed bottom-4 right-4">
     <button className="flexCenter gap-x-6 medium-10 rounded-full pr-3">
          <a href="https://wa.me/8058517274" target="_blank"><img src={userIcon} alt="" height={40} width={40} /></a>
          <span className='hidden'>Whatsapp</span>
      </button>
</div>
    <div className="relative h-[800px]">
    {/* Background Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${Back})` }}
    ></div>

    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>

    {/* Content */}
    <div className="relative z-10 h-full flex flex-col justify-center text-center text-white px-8 pt-20">
      <h1 className="text-3xl sm:text-5xl font-bold mb-4 overflow-y-hidden">
        GODREJ PROPERTIES
      </h1>
      <h2 className="text-xl sm:text-2xl mb-6 overflow-y-hidden">Greater Noida, UP</h2>
      <div className="text-2xl font-semibold px-6 py-2  text-white inline-block rounded shadow-sm overflow-y-hidden ">
        3 & 4 BHK Apartments
      </div>

      {/* Cards Section */}
      <div className="mt-10 flex flex-col sm:flex-row justify-center gap-20">
        {/* Card 1 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high sm:mb-5 mb-5 overflow-y-hidden">
          <h3 className="text-2xl font-bold overflow-y-hidden">Godrej South Estate</h3>
        </div>

        {/* Card 2 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high sm:mb-6 mb-6 overflow-y-hidden">
          <h3 className="text-xl font-bold mb-2 overflow-y-hidden">
            Want To Sale Your Unit at Best Price
          </h3>
          
        </div>

        {/* Card 3 */}
        <div className="bg-gradient-to-r from-[#1a1a1a] 
                to-[#b1977769] banner-high mb-5 overflow-y-hidden">
          <h3 className="text-xl font-bold mb-2">3 Towers (262 Units)</h3>
        </div>
      </div>
    </div>
  </div>


 {/* onClick={handleOnClick} Enquire Now Button */}
 {/* <Link to={'/contactus'}>
      <div className="text-center mt-6">
        <button className="bg-[#be9035] text-white px-6 py-2 rounded-sm font-semibold hover:bg-yellow-500 transition">
          ENQUIRE NOW
        </button>
      </div>
      </Link> */}

<section className=" pb-[20px] md:pb-[50px]" id="resale">
    <div className=" w-11/12 md:w-10/12 mx-auto">
    <div
  className="">
            <div className="">
                <h2 className="md:text-[40px] text-center md:leading-tight text-2xl mt-3 font-normal"><br />  <span className=" font-medium text-center text-[44px]">Godrej</span> South Estate</h2></div>
                <h2 className='text-center font-medium text-xl mt-3'>Size & Price </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-3 gap-x-3 md:gap-y-10 gap-y-5 md:gap-x-10 pt-[50px]">
            <div className="col-span-1">
                <div className="relative">
                <div
  className="h-[400px] relative bg-black bg-opacity-50 z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay"
  style={{
    backgroundImage: `url(${Godrej})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
<div 
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>
                        <div className="absolute z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay">
                            <div className=" pb-3">
                                <h2 className="text-3xl text-center font-medium pb-5">2234 Sq.ft-3BHK Compact
                                </h2>
                                <p className="text-4xl text-center font-medium pb-12 text-white">5.92cr- 6.38cr</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                    <button onClick={handleOnClick} className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2">ENQUIRE NOW</button>
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
    backgroundImage: `url(${Godrej2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div 
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>
                        <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                            <div className=" pb-3">
                                <h2 className="text-3xl text-center font-medium pb-7">2751 Sq.ft- 3BHK Large
                                </h2>
                                <p className="text-4xl text-center font-medium pb-12 text-white">6.94cr- 7.35cr</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                    <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2" onClick={handleOnClick}>ENQUIRE NOW</button>
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
    backgroundImage: `url(${Godrej3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
    <div 
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>
                        <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                            <div className=" pb-3">
                                <h2 className="text-3xl text-center font-medium pb-7">3851 Sq.ft- 4BHK+St
                                </h2>
                                <p className="text-4xl text-center font-medium pb-12 text-white">9.58cr - 10.06 cr</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                    <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2" onClick={handleOnClick}>ENQUIRE NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<h2 className='text-center font-medium text-xl pb-20 '>Note: AMC,IFMS and Govt. Charges Additional as applicable. </h2>

            <section className=' bg-secondary pb-[40px] md:pb-[100px]'>
            <div className='w-11/12 md:w-10/12 mx-auto'>
            <div className='grid grid-cols-1 md:grid-cols-12 pt-[40px] md:pt-[100px] md:space-x-8'>
            <div className='col-span-1 md:col-span-4  md:py-0 py-8'>
             <p className='text-[#bd9035] text-center font-medium text-4xl'>Godrej Prima</p> 
             <h2 className="text-2xl text-center font-medium pb-3 text-white pt-4">3851 Sq.ft- 4BHK+St
                                </h2>
                                <p className="text-2xl text-center font-medium pb-3 text-white">9.58cr - 10.06 cr</p>
                                <h2 className="text-2xl text-center font-medium pb-3 text-white"><h2 className='text-[#bd9035]'>Payment Plan</h2> 20:30:50
                                </h2>
                                <h2 className='text-center font-medium text-xl pt-3 pb-3 text-white'>Under construction Fully Finished units</h2>
                                <h2 className='text-center font-medium text-xl pt-3 pb-3 text-white'>GST,AMC,IFMS and Govt. Charges Additional as applicable</h2>
            </div>
            <div className=' col-span-1 md:col-span-8'>
             <img src={Godrej4} className=' maxmd:w-full mx-auto' /> 
            </div>          
            </div>
            </div>
            </section>
    <section>
    <h2 className="md:text-[40px] text-center md:leading-tight text-2xl mt-3 font-normal"><br />  <span className=" font-medium text-center text-[44px]">Godrej</span> NEW LAUNCH 🤩</h2>
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
              <h2 className="text-2xl font-semibold mb-2">{image.title}</h2>
              <p className="text-xl text-gray-600">{image.description}</p>
              <p className="text-xl text-gray-600">{image.description1}</p>
              <p className="text-xl text-gray-600">{image.description2}</p>
              <p className="text-xl text-gray-600">{image.description3}</p>
              <p className="text-xl text-gray-600">{image.description4}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </section>

    <section className=" pb-[20px] md:pb-[50px]" id="resale">
    <div className=" w-11/12 md:w-10/12 mx-auto">
    <div
  className="">
            <div className="">
                <h2 className="md:text-[40px] text-center md:leading-tight text-2xl mt-3 font-normal"><br /> Tentative Size & Price</h2></div>
                <h2 className='text-center font-medium text-xl mt-3'>Tentative Price : 20K to 22k/ Sq.ft (Pre launch price)
                </h2>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-6 md:grid-cols-2  gap-x-3 md:gap-y-10 gap-y-5 md:gap-x-10 pt-[50px]">
            <div className="col-span-1">
                <div className="relative">
                <div
  className="h-[400px] relative bg-black bg-opacity-50 z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay"
  style={{
    backgroundImage: `url(${Godrej})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
<div 
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>
                        <div className="absolute z-10 transition-all duration-1000 w-full bottom-0 text-white card-overlay">
                            <div className=" pb-3">
                                <p className="text-4xl text-center font-medium pb-20 text-white">3BHK+U = 2700 sqft</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                    <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2" onClick={handleOnClick}>ENQUIRE NOW</button>
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
    backgroundImage: `url(${Godrej2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}>
     <div 
    className="absolute inset-0 bg-black bg-opacity-50"
  ></div>
                        <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay">
                            <div className=" pb-3">
                                <p className="text-4xl text-center font-medium pb-20 text-white">4BHK+U = 3700 sqft</p>
                            </div>
                            <div className="flex justify-center pb-5">
                                <div className=" border-b border-[#bd9035] hover:border-[#071B32]  transition-all pb-1">
                                    <button className=" text-white  text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all  px-10 py-2" onClick={handleOnClick}>ENQUIRE NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

    <div className="max-padd-container p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Floor Plan</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* First Row with Crest V1 and Crest V2 */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">CREST FLOOR PLAN - V1</h2>
          <img src={Maps} alt="Crest Floor Plan V1" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">CREST FLOOR PLAN - V2</h2>
          <img src={Maps1} alt="Crest Floor Plan V2" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        
        {/* Second Row with Evoke */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">EVOKE</h2>
          <img src={Evoke} alt="Evoke Floor Plan" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">EVOKE</h2>
          <img src={Evokes} alt="Evoke Floor Plan" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>

         {/* First Row with Crest V1 and Crest V2 */}
         <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">Windsor</h2>
          <img src={Windsor1} alt="Crest Floor Plan V1" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden text-center">
          <h2 className="text-xl font-semibold p-4">Windsor</h2>
          <img src={Windsor2} alt="Crest Floor Plan V2" className="w-full h-70 object-cover transform transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
      <div className="flex justify-center items-center">
          <a href="#" className="mt-4 inline-block bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600 transition" onClick={handleOnClick}>ENQUIRE NOW</a>
        </div>
    </div>

    <div className="bg-secondary py-8">
  <h1 className="text-white text-4xl font-bold text-center mb-6 overflow-y-hidden">
    Club Facilities💫
  </h1>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 px-4">
    {[
      { src: Club, title: "45000sqft", subtitle: "CLUBHOUSE" },
      { src: Residence, title: "", subtitle: "Premium high-rise residences" },
      { src: Garden, title: "170 acres", subtitle: "Botanical garden" },
      { src: Green, subtitle: "Spanning 6.45 acres of lush green spaces" },
      { src: Vastu, subtitle: "Vastu-compliant architecture for harmony" },
      { src: Connect, subtitle: "Prime location offering seamless connectivity to Delhi and NCR" },
      { src: Tech, subtitle: "24/7 security with CCTV, smart locks, access control, and biometric entry" },
      { src: Finish, subtitle: "Premium flooring, modular kitchens, and spacious balconies" },
      { src: Eco, subtitle: "Eco-friendly design" },
      { src: Design, subtitle: "Homes designed for abundant natural light and elegant interiors" },
    ].map((item, index) => (
      <div
        key={index}
        className="relative bg-white shadow-lg rounded-lg overflow-hidden h-[350px]"
      >
        <img
          src={item.src}
          alt={item.subtitle}
          className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="absolute z-10 transition-all w-full bottom-0 text-white card-overlay p-4">
          <div className="pb-3">
            {item.title && (
              <h2 className="text-2xl text-center font-medium pb-5 text-white">{item.title}</h2>
            )}
            <p className="text-3xl text-center font-medium pb-12 text-white">{item.subtitle}</p>
          </div>
          <div className="flex justify-center pb-5">
            <div className="border-b border-[#bd9035] hover:border-[#071B32] transition-all pb-1">
              <button className="text-white text-sm hover:bg-[#071B32] bg-[#bd9035] transition-all px-10 py-2" onClick={handleOnClick}>
                 ENQUIRE NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


    <div className="max-padd-container  sm:flex-row justify-center items-center bg-[#f8f5ef] p-4 sm:p-8">
      {/* Title */}
      <h1 className="text-3xl sm:text-4xl font-semibold text-center w-full mb-6 sm:mb-8 overflow-y-hidden">
        Location
      </h1>

      {/* Maps Container */}
      <div className="flex flex-col sm:flex-row w-full gap-6">
        {/* First Map */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.723655937583!2d77.5119842465003!3d28.47295268432532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea853d1c9a8f%3A0x1279ef07f589fa5!2sGodrej%20Golf%20Links!5e0!3m2!1sen!2sin!4v1702920000000!5m2!1sen!2sin"
            alt="Location Overview Map"
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>

        {/* Second Map */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14008.723655937583!2d77.5119842465003!3d28.47295268432532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea853d1c9a8f%3A0x1279ef07f589fa5!2sGodrej%20Golf%20Links!5e0!3m2!1sen!2sin!4v1702920000000!5m2!1sen!2sin"
            className="w-full h-72 rounded-lg shadow-lg border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 sm:p-8">
      {/* Villa Highlights Section */}
      <div className="flex items-center justify-between overflow-y-hidden ">

        {/* Highlights Content */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-3/4 mx-auto overflow-y-hidden">
          {/* Highlight 1 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Marvel} // Replace with actual icon
              alt="Marble Flooring"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Engineered Marble flooring</p>
          </div>

          {/* Highlight 2 */}
          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105">
            <img
              src={Party}// Replace with actual icon
              alt="Party Deck"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Party Deck on rooftop</p>
          </div>

          <div className="flex flex-col items-center w-full sm:w-1/2 border rounded-lg p-6 shadow-sm transform transition-transform duration-300 hover:scale-105">
            <img
              src={Swimms}// Replace with actual icon
              alt="Party Deck"
              className="w-30 h-30 mb-4"
            />
            <p className="text-sm text-center overflow-y-hidden">Swimming Time</p>
          </div>
        </div>  
      </div>

      {/* Success Story Section */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center my-12 overflow-y-hidden">
        OUR SUCCESS STORY
      </h2>
      <div className="flex items-center justify-between">
        {/* Success Story Content */}
        <div className="flex flex-col sm:flex-row justify-center gap-8 w-3/4 mx-auto overflow-y-hidden">
          {/* Story 1 */}
          <div className="flex items-center justify-center w-full sm:w-1/2 border rounded-lg p-4 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Story1}// Replace with actual newspaper image
              alt="Story 1"
              className="w-full h-auto rounded-sm overflow-y-hidden"
            />
          </div>

          {/* Story 2 */}
          <div className="flex items-center justify-center w-full sm:w-1/2 border rounded-lg p-4 shadow-sm transform transition-transform duration-300 hover:scale-105 overflow-y-hidden">
            <img
              src={Story2} // Replace with actual newspaper image
              alt="Story 2"
              className="w-full h-auto rounded-sm overflow-y-hidden"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="bg-white p-4 sm:p-8">

      {/* Property Rera Numbers Section */}
      <div className="text-center my-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
        CONTACT ANY MORE INFO: 
        </h2>

        {/* Property Rera Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
         <Link to={"tel:8077148435"} className="bg-yellow-600 text-white px-6 py-2 rounded-sm font-semibold">
          📞 +91-8077148435
          </Link>
        </div>
      </div>
    </div> 
  </div>
  )
}



export default Project
