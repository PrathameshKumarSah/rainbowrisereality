import React, { useState, useRef, useEffect } from "react";
import CollapsibleSection from "../components/CollapsibleSection";
import { MapPin, Building, Bed, Ruler, Phone, ClipboardPenLine } from "lucide-react";
import { useLocation } from "react-router-dom";
import { apiStore, BASE_URL } from "../store/apiHandler";
import Map from '../components/Map';
import { Link } from 'react-router-dom'
import EnquireForProject from "../components/EnquireForProject";
import Floor from '../assets/floor.jpg'
import Floor1 from '../assets/floor1.jpg'
import EnquireForBrochure from "../components/EnquireForBrochure";
import RelatedProj from "../components/RelatedProj";



const Projectpage = () => {
  const {pathname} = useLocation();
  const [brochureModalOpen, setBrochureModalOpen] = useState();
  const id = pathname.split('/').slice(-1)[0];
  const {propertyLoading, getProject, isError, setModalOpen, searchQueryMore, GetRelatedProj} = apiStore();
  const [property, setProperty] = useState({});
  const [mainImage, setMainImage] = useState(property.imgs && BASE_URL+property?.imgs.split(',')[0]);
  const navbarRef = useRef(null);
  const aboutRef = useRef(null);
  const configRef = useRef(null);
  const amenitiesRef = useRef(null);
  const localityRef = useRef(null);
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  // related projects variable
  const [recommendations, setRecommendations] = useState([]);

  // Fetch recommendations from backend
  const fetchRecommendations = async (id) => {
      try {
          const data = await GetRelatedProj(id);
          setRecommendations(data); // Expecting data to be an array of top matchesa

          console.log("fetch recommendation:"+data);
      } catch (error) {
          setRecommendations([]); // Ensure recommendations clear on error
      }
  };


  useEffect(() => {
    const getData = async () => {
      setProperty(await getProject(id));
      fetchRecommendations(id);
    };
    getData();
  }, []);

  const handleOnClick = () => {
    console.log("handle one click ", property);
    setModalOpen(true, property.title);
  }

  const handleImageClick = (image) => {
    setMainImage(image);
  };

  const handleScroll = () => {
    if (navbarRef.current) {
      const offset = navbarRef.current.getBoundingClientRect().top;
      setIsNavbarSticky(offset <= 0);
    }
  };

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMainImage(property.imgs && BASE_URL+property?.imgs.split(',')[0]);
  },[property.imgs]);

  if (propertyLoading) {
    return (
      <div className="h-screen my-28 mx-8 md:mx-2 flex items-center justify-center">
        <div className="space-y-6 w-full max-w-4xl mx-auto">
          {/* Main Image Skeleton */}
          <div className="w-full h-[300px] sm:h-[400px] bg-gray-300 animate-pulse rounded-lg"></div>
  
          {/* Property Details Skeleton */}
          <div className="flex flex-col sm:flex-row gap-6">
            <div className="flex-1 space-y-4">
              <div className="h-8 bg-gray-300 animate-pulse rounded-lg w-3/4"></div>
              <div className="h-6 bg-gray-300 animate-pulse rounded-lg w-1/2"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-300 animate-pulse rounded-lg w-full"></div>
                <div className="h-4 bg-gray-300 animate-pulse rounded-lg w-5/6"></div>
              </div>
            </div>
  
            {/* Thumbnails Skeleton */}
            <div className="w-1/3 flex flex-wrap gap-4">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-20 h-20 sm:w-24 sm:h-24 bg-gray-300 animate-pulse rounded-lg"
                ></div>
              ))}
            </div>
          </div>
  
          {/* Sticky Navbar Skeleton */}
          <div className="hidden md:block h-12 bg-gray-300 animate-pulse rounded-lg"></div>
        </div>
      </div>
    );
  }  

  if(isError){
    return (
      <div className=' h-80 flex items-center justify-center'>
        Error while Fetching Data
      </div>
    )
  }

  return (
    <div>
      {/* Main Content */}
      <div className="mx-auto p-4 mt-20">
        <div className="flex flex-col-reverse gap-4 lg:flex-row bg-[#F8FAFC] shadow-md rounded-lg overflow-hidden">
          {/* Left Section */}
          <div className="lg:w-2/5 p-6">
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold bg-yellow-300 px-2 py-1 rounded">
                {property?.status}
              </span>
            </div>
            <div className="flex justify-between items-center my-4">
              <h1 className="text-3xl font-bold text-gray-800">{property?.title}</h1>
            </div>
            <div className="text-sm text-gray-500 my-2">{property?.location}</div>
            <div className="flex flex-col justify-center my-3">
              <div className="grid grid-cols-2 gap-2">
                {/* Location */}
                <div className="flex items-center p-2">
                  <MapPin className="text-blue-500 mr-2" />
                  <p className="text-base">{property?.location}</p>
                </div>

                <div className="flex items-center p-2">
                  <Building className="text-green-500 mr-2" />
                  <p className="text-base">{property?.category}</p>
                </div>

                {/* BHK */}
                <div className="flex items-center p-2">
                  <Bed className="text-purple-500 mr-2" />
                  <p className="text-base">{property?.rooms}</p>
                </div>

                {/* Area Size */}
                <div className="flex items-center p-2">
                  <Ruler className="text-red-500 mr-2" />
                  <p className="text-base">{property?.area_size}</p>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center flex-wrap gap-3">
              <Link to={'tel:+918058517274'} className="flex gap-2 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600"
                // onClick={handleOnClick}
              >
                <Phone />
                <span className="flex flex-wrap flex-row"><span className="hidden md:block mr-1">Instant</span> Call Back</span>
              </Link>

              <button className="flex gap-2 bg-red-500 text-white px-6 py-2 rounded-lg font-medium hover:bg-red-600"
                onClick={handleOnClick}
              >
                <ClipboardPenLine />
                Enquiry
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:w-3/5 flex flex-col">
            <div className="flex flex-col items-center space-y-4">
              {/* Main Image */}
              <div className="w-full">
                <img
                  src={mainImage}
                  alt="Main Display"
                  className="w-full sm:w-full h-[300px] sm:h-[400px] rounded-lg shadow-lg object-cover"
                />
              </div>

              {/* Thumbnail Images */}
              <div className="flex justify-center space-x-4 overflow-x-auto">
                {property.imgs && property?.imgs.split(",").map((image, index) => (
                  <img
                    key={index}
                    src={BASE_URL+image}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-blue-500 transition-all"
                    onClick={() => handleImageClick(BASE_URL+image)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`hidden ${
          isNavbarSticky ? "sticky top-0 z-10" : ""
        } bg-black text-white md:block`}
        ref={navbarRef}
      >
        <ul className="flex flex-wrap justify-around md:justify-center md:space-x-6 py-3">
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(aboutRef)}
          >
            ABOUT
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(configRef)}
          >
            CONFIGURATION
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(amenitiesRef)}
          >
            AMENITIES
          </li>
          <li
            className="px-4 py-2 text-sm md:text-base font-medium hover:text-pink-500 cursor-pointer"
            onClick={() => scrollToSection(localityRef)}
          >
            LOCALITY
          </li>
        </ul>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col md:flex-row bg-[#F8FAFC] shadow-lg rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="px-6 lg:px-12 md:w-2/3">
          <div ref={aboutRef}>
            <CollapsibleSection title="About">
              <p>
                {property?.about}
              </p>
            </CollapsibleSection>
          </div>
          <div ref={configRef}>
            <CollapsibleSection title="Configuration">
            <div className="grid grid-cols-1 md:grid-cols-2 gap2">
                    <div className=" p-4 rounded shadow" onClick={()=>setBrochureModalOpen(true)}>
                          <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-2">
                        <img
                        src={Floor}
                        alt="University of Southern California"
                        className="absolute inset-0 h-full w-full object-cover blur-sm"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                        <div className="z-10 gap-y-1 overflow-hidden text-lg leading-6 text-gray-300">
                          Tab To View
                        </div>
                        <h3 class="z-10 mt-3 text-3xl font-bold text-white">Floor Plan</h3>
                        </article>
                    </div>
                    <div className=" p-4 rounded shadow hidden md:block" onClick={()=>setBrochureModalOpen(true)}>
                      <article className="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-2">
                    <img
                    src={Floor1}
                    alt="University of Southern California"
                    className="absolute inset-0 h-full w-full object-cover blur-sm"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
                    <div className="z-10 gap-y-1 overflow-hidden text-lg leading-6 text-gray-300">
                      Tab To View
                    </div>
                    <h3 class="z-10 mt-3 text-3xl font-bold text-white">Floor Plan</h3>
                    </article>
                    </div>
                </div>
            </CollapsibleSection>
          </div>
          <div ref={amenitiesRef}>
            <CollapsibleSection title="Amenities">
              <p>{property?.features}</p>
            </CollapsibleSection>
          </div>
          <div ref={localityRef}>
            <CollapsibleSection title="Location">
              <Map address={property?.area} city={property?.city} country={'India'} />
            </CollapsibleSection>
          </div>

        </div>

        {/* Enquiry Box */}
        <div className="md:w-1/4 w-full p-4">
          <div className="sticky top-20">
            <div className="bg-gray-100 border rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Enquire Box</h2>
                <EnquireForProject />
            </div>
          </div>
        </div>
      <EnquireForBrochure modalOpen={brochureModalOpen} setModalOpen={setBrochureModalOpen} brochureUrl={BASE_URL+property?.brochure} />
    </div>

    <hr class="my-8 border-0 h-1 mx-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full shadow-md" />

    {/* <RelatedProj /> */}
    {recommendations.length>0 && 
      <div className="mb-12 mx-6">
        <h1 className="text-3xl font-bold mb-3 text-gray-800">Related Project</h1>
          <div className="grid grid-cols-2 gap-1 md:gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {recommendations?.map((item) => (
              <RelatedProj key={item.id} data={item} type={item.type} />
            ))}
          </div>
      </div>
    }
    
  </div>
  );
};

export default Projectpage;
