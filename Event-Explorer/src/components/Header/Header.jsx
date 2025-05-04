import React from "react";
import { Link, NavLink } from "react-router";
import { FaInternetExplorer } from "react-icons/fa";
const Header = () => {
  return (
    <div className="navbar py-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content flex flex-col items-center justify-center gap-6 bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
           <NavLink className="font-medium w-fit text-lg text-[#393E46]" to="/">
            Home
          </NavLink>
          <NavLink className="font-medium text-lg text-[#393E46]" to="/profile">
            My Profile
          </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-3 ml-4 md:ml-0">
        <FaInternetExplorer size={27}  className="text-[#AD49E1]"/>
        <p className="text-2xl font-semibold text-[#393E46]">EventFinder</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center gap-6 menu-horizontal px-1">
          <NavLink className="font-medium text-lg text-[#393E46]" to="/">
            Home
          </NavLink>
          <NavLink className="font-medium text-lg text-[#393E46]" to="/profile">
            My Profile
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to='/login' className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded">Login</Link>
      </div>
    </div>
  );
};

export default Header;
