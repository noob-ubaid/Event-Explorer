import React from "react";
const Thirdslider = () => {
  return (
    <div className="bg-[url('/thirdslide.jpg')]  bg-center bg-cover md:h-[600px] h-[450px]  rounded-2xl ">
    <div className="flex items-center rounded-2xl h-full bg-[linear-gradient(180deg,_rgba(15,15,15,0)_-27.727%,_rgba(15,15,15,0.8)_100%)] justify-center">
      <div className="flex flex-col items-center justify-center gap-6">
        <p className=" lg:text-5xl md:text-4xl text-2xl font-bold text-white">
          Discover Amazing Events Near You{" "}
        </p>
        <p className="lg:text-xl text-lg text-center text-white">
          Find and attend the most exciting local events happening in your
          city
        </p>
        <button className="bg-[#AD49E1] w-fit font-medium md:px-6 md:py-2.5 px-4 py-2 rounded-md text-white">
          Explore Events
        </button>
      </div>
    </div>
  </div>
  );
};

export default Thirdslider;
