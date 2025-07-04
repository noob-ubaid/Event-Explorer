import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { FaInternetExplorer } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
const Header = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => toast.warning("Successfully Logged out!"))
      .then(() => {});
  };
  return (
    <div className="navbar py-6 mb-4">
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
            <NavLink
              className="font-medium w-fit text-lg text-[#393E46]"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="font-medium text-lg text-[#393E46]"
              to="/profile"
            >
              My Profile
            </NavLink>
            <NavLink className="font-medium text-lg text-[#393E46]" to="/host">
              Host Event
            </NavLink>
          </ul>
        </div>
        <div className="flex items-center gap-3 ml-4 md:ml-0">
          <FaInternetExplorer size={27} className="purple" />
          <p className="text-2xl font-semibold text-[#393E46]">EventFinder</p>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu flex items-center gap-8 menu-horizontal px-1">
          <NavLink className="font-medium text-lg text-[#393E46]" to="/">
            Home
          </NavLink>
          <NavLink className="font-medium text-lg text-[#393E46]" to="/profile">
            My Profile
          </NavLink>
          <NavLink className="font-medium text-lg text-[#393E46]" to="/host">
            Host Event
          </NavLink>
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4 md:gap-6">
        <Tooltip title={user && user.displayName} arrow>
          <Button>
            {user && (
              <img
                className="md:size-12 size-10 rounded-full"
                src={user.photoURL}
                alt=""
              />
            )}
          </Button>
        </Tooltip>

        {user ? (
          <button
            onClick={handleLogOut}
            className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded"
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className=" bg-[#AD49E1] text-white font-medium md:px-8 md:py-2.5 px-4 py-2  rounded"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
