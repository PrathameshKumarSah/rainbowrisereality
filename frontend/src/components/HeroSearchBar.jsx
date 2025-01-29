import { Loader, Search, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiStore } from "../store/apiHandler";

const HeroSearchBar = () => {
  const [searchText, setSearchText] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const { searchLoading, searchQuery } = apiStore();
  const navigate = useNavigate();

  // Fetch recommendations from backend
  const fetchRecommendations = async (query) => {
    if (!query.trim()) {
      setRecommendations([]);
      return;
    }

    try {
      const data = await searchQuery(query);
      setRecommendations(data); // Expecting data to be an array of top matches
    } catch (error) {
      setRecommendations([]); // Ensure recommendations clear on error
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setSearchText(value);
    fetchRecommendations(value);
  };

  const handleClear = () => {
    setSearchText("");
    setRecommendations([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    navigate('/search?query='+searchText);
    setSearchText("");
    setRecommendations([]);
  };

  return (
    <div className="relative w-full md:w-3/4 lg:w-2/3">
      <form
        onSubmit={handleSubmit}
        className="flex gap-1 items-center w-full shadow-md text-sm md:text-base"
      >
        {/* Search Input */}
        <input
          type="text"
          className="w-full px-2 md:px-4 py-3 md:py-4 border-l placeholder-black border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-gray-500"
          placeholder="Search projects or properties..."
          value={searchText}
          onChange={handleChange}
        />

        {/* Clear Button */}
        {searchText && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-12 md:right-40 text-gray-500 hover:text-gray-700"
          >
            <X size={18} />
          </button>
        )}

        {/* Search Button */}
        <button
          type="submit"
          className="flex gap-2 px-2 md:px-6 py-3 md:py-4 text-white font-medium rounded bg-blue-900 transition duration-300 hover:bg-blue-950 hover:-translate-y-1"
        >
          <Search size={20} />
          <span className="hidden font-bold md:inline">SEARCH</span>
        </button>
      </form>

      {/* Loading Indicator */}
      {searchLoading && (
        <div className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10 flex justify-center py-3">
          <Loader size={24} className="animate-spin text-gray-500" />
        </div>
      )}

      {/* Recommendations or "No Results Found" */}
      {!searchLoading && searchText.trim() && (
        <ul className="absolute left-0 w-full bg-white border border-gray-300 rounded-md shadow-md mt-2 z-10">
          {recommendations.length > 0 ? (
            recommendations.map((item, index) => (
              <li key={index} className="p-3 hover:bg-gray-100 border-b">
                <Link to={item.link} className="text-blue-600 hover:underline">
                  {item.title}
                </Link>
              </li>
            ))
          ) : (
            <li className="p-3 text-center text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default HeroSearchBar;
