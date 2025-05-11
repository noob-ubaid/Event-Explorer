import React from "react";

const HostEvent = () => {
  return (
    <div className="px-4 md:px-0">
      <h3 className="text-2xl md:text-4xl lg:text-5xl text-center  font-bold tracking-wide bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        Host an event
      </h3>
      <form>
        <div className="flex flex-col mt-6 md:gap-6 gap-4 md:mt-10 w-full">
          <input
            className=" px-6 py-3 rounded bg-gray-200 outline-none"
            type="text"
            name="name"
            placeholder="Enter your Event Name"
            required
          />
          <div className="flex items-center md:gap-8 gap-4   flex-col md:flex-row w-full">
            <input
              className=" px-6 py-3 rounded md:w-[50%] w-full bg-gray-200 outline-none"
              type="text"
              name="category"
              placeholder="Enter your Category Name"
              required
            />{" "}
            <input
              className=" px-6 py-3 md:w-[50%] w-full rounded bg-gray-200 outline-none"
              type="date"
              name="date"
              placeholder="Enter your Date"
              required
            />
          </div>
          <div className="flex items-center md:gap-8 gap-4  flex-col md:flex-row w-full">
            <input
              className=" px-6 py-3 rounded md:w-[50%] w-full bg-gray-200 outline-none"
              type="text"
              name="location"
              placeholder="Enter your Location"
              required
            />{" "}
            <input
              className=" px-6 py-3 md:w-[50%] w-full rounded bg-gray-200 outline-none"
              type="number"
              name="fee"
              placeholder="Enter your Entry Fee"
              required
            />
          </div>
          <input
            className=" px-6 py-3 rounded bg-gray-200 outline-none"
            type="text"
            name="image"
            placeholder="Enter your Image URL"
            required
          />
          <textarea
            name="description"
            rows="5"
            required
            placeholder="Description"
            className=" px-6  py-3 rounded bg-gray-200 outline-none"
          ></textarea>
          <button type="submit" className=" bg-[#AD49E1] w-full text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">
            Host the event
          </button>
        </div>
      </form>
    </div>
  );
};

export default HostEvent;
