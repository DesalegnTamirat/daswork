import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import { assets, JobCategories, JobLocations} from "../assets/assets";
import JobCard from "./JobCard";

const JobListing = () => {
  const [showFilter, setShowFilter] = useState(false);
  const { isSearched, searchFilter, setSearchFilter, jobs } = useContext(AppContext);
  return (
    <div className="container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8">
      {/* sidebar */}
      <div className="w-full lg:w-1/4 bg-white px-4">
        {/* Search Filter from Hero component */}
        {isSearched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <>
              <h3 className="font-medium text-lg mb-4">Current Search</h3>
              <div className="mb-4 text-gray-600">
                {searchFilter.title && (
                  <span className="inline-flex items-center gap-2.5 bg-green-50 border border-green-200 px-4 py-1.5 rounded">
                    {searchFilter.title}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, title: "" }))
                      }
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt=""
                    />
                  </span>
                )}
                {searchFilter.location && (
                  <span className="ml-2 inline-flex items-center gap-2.5 bg-pink-50 border border-pink-200 px-4 py-1.5 rounded">
                    {searchFilter.location}
                    <img
                      onClick={() =>
                        setSearchFilter((prev) => ({ ...prev, location: "" }))
                      }
                      src={assets.cross_icon}
                      className="cursor-pointer"
                      alt=""
                    />
                  </span>
                )}
              </div>
            </>
          )}


        {/* Filter Button */}
        <button className="px-6 py-1.5 rounded border border-gray-400 lg:hidden" onClick={() => setShowFilter(!showFilter)}>
          {showFilter ? "Close": "Filters"}
        </button>
        {/* Category Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4">Search by Categories</h4>
          <ul className="space-y-4 text-gray-600">
            {JobCategories.map((location, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                <label>{location}</label>
              </li>
            ))}
          </ul>
        </div>

        {/* Location Filter */}
        <div className={showFilter ? "" : "max-lg:hidden"}>
          <h4 className="font-medium text-lg py-4  pt-14">Search by Locations</h4>
          <ul className="space-y-4 text-gray-600">
            {JobLocations.map((category, index) => (
              <li className="flex gap-3 items-center" key={index}>
                <input className="scale-125" type="checkbox" />
                <label>{category}</label>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Job Listing */}
      <section className="w-full lg:w-3/4 text-gray-800 max-lg:px-4">
        <h3 className="font-medium text-3xl py-2" id="job-list">Latest jobs</h3>
        <p className="mb-8">Get your desired job from top companies</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
          {
            jobs.map((job, index) => (
              <JobCard key={index} job={job}/>
            ))
          }
        </div>
      </section>
    </div>
  );
};

export default JobListing;
