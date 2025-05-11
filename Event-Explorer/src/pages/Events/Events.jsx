import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import Event from "../Event/Event";

const Events = () => {
  const data = useLoaderData();
  const [displayData , setDisplayData] = useState([])
  const [isShowAll,setIsShowAll] = useState(false);
  useEffect(() => {
    if(isShowAll){
      setDisplayData(data)
    }else{
      setDisplayData(data.slice(0,6))
    }
  },[isShowAll , data])
  return (
    <>
      <div className="my-6 md:mt-12">
        <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Upcoming Events
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-12 justify-items-center lg:grid-cols-3 gap-8">
        {displayData.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
      <div className="w-full flex items-center justify-center mt-4">
        <button  onClick={() => {setIsShowAll(!isShowAll)}} className="px-6 py-2.5 cursor-pointer text-white mb-4 font-bold rounded-md mt-6 bg-[#AD49E1]">
          {
            isShowAll ? "Show Less Events" : "Show All Events"
          }
        </button>
      </div>
    </>
  );
};

export default Events;
