import React from "react";
import { toast } from "react-toastify";

const ReserveSeat = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        toast.success("Successfully reserve a seat");
    }
  return (
    <div className="px-4 py-12 md:py-16 mt-10 md:px-0 bg-black">
      
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <div className="w-full md:max-w-sm ">
        <p className="text-2xl md:text-3xl pb-4 border-b border-b-gray-500 text-white text-center lg:text-4xl font-semibold mt-6 md:mt-12">
        Reserve a seat
      </p>
          {/* Name  */}
          <label className="label text-white text-[14px] mt-4 font-medium mb-1">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Enter your name"
          />
          {/* email  */}
          <label className="label text-white text-[14px] mt-2 font-medium mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="input w-full"
            placeholder="Email"
          />
          <button className="px-4 py-2 w-full md:px-6 md:py-3 rounded-md font-medium mt-6 text-white bg-[#AD49E1]" type="submit">Reserve</button>
        </div>
      </form>
    </div>
  );
};

export default ReserveSeat;
