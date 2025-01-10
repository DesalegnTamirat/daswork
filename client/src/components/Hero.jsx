import React, { useContext, useRef } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Hero = () => {

  const {setSearchFilter, setIsSearched} = useContext(AppContext);
  const titleRef = useRef(null);
  const locationRef = useRef(null);

  const onSearch = () => {
    setSearchFilter({
      title: titleRef.current.value,
      location: locationRef.current.value,
    });
    setIsSearched(true);
};

  return (
    <div className="container 2xl:px-20 mx-auto my-10">
      <div className="bg-gradient-to-r from-cyan-800 to-cyan-950 text-white py-16 text-center mx-2 rounded-xl">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-4">
          Over 5,000+ jobs to apply
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-sm font-light px-5">
          Unlock Your Dream Career Today - Discover Top Job Opportunities and
          Begin Your Journey Toward a Brighter Future!
        </p>
        <div className="flex items-center justify-between bg-white rounded text-gray-600 max-w-xl pl-4 mx-4 sm:mx-auto">
          <div className="flex items-center ">
            <img
              src={assets.search_icon}
              alt="Search Icon"
              className="h-4 sm:h-5"
            />
            <input ref={titleRef}
              type="text"
              placeholder="Search for jobs"
              className="max-sm:text-xs p-2 rounded outline-none w-full hover:border-green-700 focus:border-green-600 border-b focus:border-b-2 transition-all duration-500"
            />
          </div>
          <div className="flex items-center">
            <img
              src={assets.location_icon}
              alt="Search Icon"
              className="h-4 sm:h-5"
            />
            <input ref={locationRef}
              type="text"
              placeholder="Location"
              className="max-sm:text-xs p-2 rounded outline-none w-full hover:border-green-700 focus:border-green-600 focus:border-b-2 border-b transition-all duration-500"
            />
          </div>
          <button onClick={onSearch} className="bg-green-700 px-6 py-2 rounded text-white m-1 hover:bg-green-800 transition-all duration-500">
            Search
          </button>
        </div>
      </div>

      <div className="bg-green-200 border border-gray-300 shadow-md mx-2 mt-5 px-2 py-8 rounded-md flex">
        <div className="flex justify-center gap-8 lg:gap-12 flex-wrap">
          <p className="font-medium">Trusted by</p>
          <img className="h-5" src={assets.amazon_logo} alt="" />
          <img className="h-5" src={assets.samsung_logo} alt="" />
          <img className="h-5" src={assets.microsoft_logo} alt="" />
          <img className="h-5" src={assets.adobe_logo} alt="" />
          <img className="h-5" src={assets.accenture_logo} alt="" />
          <img className="h-5" src={assets.walmart_logo} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
