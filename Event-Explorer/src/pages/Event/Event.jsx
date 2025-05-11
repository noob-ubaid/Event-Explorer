import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router";
const Event = ({ event }) => {
  const {
    name,
    id,
    category,
    date,
    location,
    entryFee,
    thumbnail,
    description,
  } = event;
  useEffect(() => {
    AOS.init({ duration: 600, once : true});
  }, []);
  return (
    <div
      data-aos="fade-down-right"
      data-aos-delay={id * 250}
      className="relative max-w-md mx-auto bg-black/40  rounded-3xl overflow-hidden shadow-2xl backdrop-blur-xl group transition duration-500  hover:shadow-blue-800"
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-600/20 via-transparent to-pink-500/20 blur-md group-hover:blur-xl transition-all duration-700"></div>

      <div className="relative z-10">
        <img
          src={thumbnail}
          alt="Tech Conference 2025"
          className="w-full h-56 object-cover rounded-t-3xl"
        />

        <div className="absolute top-4 left-4 bg-blue-600/80 text-white text-sm font-semibold px-3 py-1 rounded-full animate-pulse shadow-lg backdrop-blur-sm">
          {category}
        </div>

        <div className="absolute top-4 right-4 z-40 bg-gradient-to-r from-pink-600 via-red-500 to-orange-400 text-white font-semibold px-5 py-2 rounded-2xl shadow-md text-sm shadow-red-500/30">
          ৳ {entryFee}
        </div>

        <div className="p-6 bg-black/80 rounded-b-3xl backdrop-blur-md space-y-4">
          <div className="flex justify-between items-center text-gray-400 text-sm">
            <div className="flex items-center gap-1">
              <svg
                className="w-4 h-4 text-blue-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 11 7 11s7-5.75 7-11c0-3.87-3.13-7-7-7zM10 11.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
              </svg>
              {location}
            </div>
            <span className="text-sm">📅 {date}</span>
          </div>

          <h2 className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {name}
          </h2>
          <div>
            {description.length > 30 ? (
              <p className="text-white">
                {description.slice(0, 110)}
                <span className="">
                  ...
                </span>
              </p>
            ) : (
              description
            )}
          </div>

          <div className="mt-3">
            <Link to={`/details/${id}`}  className="relative inline-flex items-center w-full justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold shadow-md shadow-blue-600/40 hover:shadow-purple-500/60 transition-all duration-300 overflow-hidden group">
              <span className="absolute inset-0 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-lg group-hover:opacity-40 transition duration-500 rounded-xl animate-pulse"></span>
              <span className="relative z-10 text-sm tracking-wide uppercase">
                View More
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
