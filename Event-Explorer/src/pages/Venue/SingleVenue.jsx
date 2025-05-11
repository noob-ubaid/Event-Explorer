import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
const SingleVenue = ({ venue }) => {
  const { image, name, location, eventsCount } = venue;
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
      <img src={image} alt={name} className="w-full h-52 object-cover" />
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-gray-800">
          {name}
        </h3>
        <p className="flex items-center text-gray-500 text-sm mt-1">
          <FaLocationDot className="mr-2" /> {location}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <a href="#" className="text-indigo-600 font-medium text-sm">
            {eventsCount} upcoming events
          </a>
          <FaArrowRight className="w-4 h-4 ml-1 text-indigo-600 font-medium" />
        </div>
      </div>
    </div>
  );
};

export default SingleVenue;
