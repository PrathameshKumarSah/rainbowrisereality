import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation hook
import HeroSearchBar from '../components/HeroSearchBar';
import ProjectLongCard from '../components/ProjectLongCard';
import { apiStore } from "../store/apiHandler.js";
import EnquireForProject from '../components/EnquireForProject.jsx';
import { LoadingCard } from './Allproject.jsx';

const SearchQueries = () => {
  const { propertyLoading, searchQueryMore } = apiStore();
    // const [searchText, setSearchText] = useState("");
    const [recommendations, setRecommendations] = useState([]);
    // const { searchLoading, searchQuery } = apiStore();

    // Fetch recommendations from backend
    const fetchRecommendations = async (query) => {
        if (!query.trim()) {
            setRecommendations([]);
            return;
        }

        try {
            const data = await searchQueryMore(query);
            setRecommendations(data); // Expecting data to be an array of top matches
        } catch (error) {
            setRecommendations([]); // Ensure recommendations clear on error
        }
    };
  
  // Get location and parse the query parameter
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query'); // Get the value of 'query' from the URL

  useEffect(() => {
    fetchRecommendations(query); // Get projects when component mounts
    // getProjects();
  }, []);

  return (
    <div className='mt-24'>
      {/* Hero Search Bar */}
      <div className='max-padd-container flex items-center my-4 justify-center'>
        <HeroSearchBar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:flex-row relative">
        {/* Content Section */}
        {!propertyLoading ?
          <div className="lg:w-3/4 w-full p-4 space-y-4">
            {/* Display query if present */}
            <h2 className="text-xl font-bold mb-4 ml-4">Searching for: {query || "No query specified"}</h2>
            
            {/* Map through the properties */}
            {recommendations?.map((item) => (
              <ProjectLongCard key={item.id} data={item} type={item.type} />
            ))}

            {recommendations.length==0 && <div className='h-64 text-center text-xl font-semibold text-gray-400'>No Results Found</div>}
          </div>
          :
          <div className='lg:w-3/4 w-full p-4 space-y-4'>
            <LoadingCard /> <LoadingCard /> <LoadingCard />
          </div>
        }

        {/* Enquiry Box */}
        <div className="lg:w-1/4 w-full p-4">
          <div className="lg:sticky lg:top-20 lg:bottom-20">
            <div className="bg-gray-100 border rounded-lg p-4 shadow-lg">
              <h2 className="text-xl font-bold mb-4">Enquire Box</h2>
              <EnquireForProject />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchQueries;
