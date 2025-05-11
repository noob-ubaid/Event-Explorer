import React, { useEffect, useState } from "react";
import SingleVenue from "./SingleVenue";

const Venue = () => {
  const [venues, setVenues] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/venue.json"); // Make sure this file is in the public folder
      const data = await res.json();
      setVenues(data);
    };

    fetchData();
  }, []);
  return (
    <div className="mt-12 md:mt-20 px-4 md:px-0">
      <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Popular Hall
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {venues.map(venue => (<SingleVenue key={venue.id} venue={venue}></SingleVenue>))}
      </div>
    </div>
  );
};

export default Venue;
