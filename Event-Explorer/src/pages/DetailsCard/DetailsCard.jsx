import React from "react";
import { Link } from "react-router";

const DetailsCard = ({ singleEvent }) => {
  const { name, category, date, location, entryFee, thumbnail, description } =
    singleEvent;
  return (
    <div className="flex items-stretch px-4 md:px-0 mt-10 gap-6 md:gap-12 flex-col md:flex-row">
      <div className="w-full md:w-[50%]">
        <img className="rounded-md " src={thumbnail} alt="" />
      </div>
      <div className=" w-full md:w-[50%] border border-[#14141426] rounded-md p-8">
        <h4 className="text-2xl lg:text-4xl text-[#141414] md:text-3xl font-medium md:font-semibold">
          Title : {name}
        </h4>
        <p className="text-lg md:text-xl text-[#14141499] font-medium mt-3">
          Category :{" "}
          <span className="text-[#AD49E1] bg-[#AD49E130] text-lg ml-4 px-3 py-1 rounded-full">
            {" "}
            {category}
          </span>{" "}
        </p>
        <p className="text-lg text-[#14141499] md:text-xl font-medium mt-2">
          Location : {location}
        </p>
        <p className="text-lg text-[#14141499] md:text-xl font-medium mt-2">
          Date : {date}
        </p>
        <p className="text-lg text-[#14141499] md:text-xl font-medium mt-2">
          Entry Fee :{" "}
          <span className="text-[#AD49E1] ml-4">{entryFee} Taka</span>
        </p>
        <p className="font-medium mt-4 text-[#14141499]">
          Description : <span className="font-normal">{description}</span>
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="bg-[#AD49E1] md:px-6 md:py-3  px-5 py-2.5 text-white rounded-md font-medium "
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
