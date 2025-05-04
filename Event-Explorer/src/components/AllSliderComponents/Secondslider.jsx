import React from "react";
import first from "/secondslide.jpg";
const Secondslider = () => {
  return (
    <div className="relative">
      <img className="w-full rounded-md" src={first} alt="" />
      <div className="absolute md:top-46 md:left-20">
        <p className=" lg:text-5xl md:text-4xl text-2xl font-bold text-white">
          Discover Amazing Events Near You{" "}
        </p>
        <p className="lg:text-xl text-lg text-white mt-4">
          Find and attend the most exciting local events happening in your city
        </p>
        <button className="bg-[#AD49E1] mt-4 font-medium md:px-6 md:py-2.5 px-4 py-2 rounded-md text-white">
          Explore Events
        </button>
      </div>
    </div>
  );
};

export default Secondslider;
