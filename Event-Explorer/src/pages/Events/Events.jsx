import React from "react";
import { useLoaderData } from "react-router";
import Event from "../Event/Event";

const Events = () => {
  const data = useLoaderData();
  return (
    <>
      <div className="my-6 md:mt-12">
        <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
          Upcoming Events
        </h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-12 justify-items-center lg:grid-cols-3 gap-8">
        {data.map((event) => (
          <Event key={event.id} event={event}></Event>
        ))}
      </div>
    </>
  );
};

export default Events;
