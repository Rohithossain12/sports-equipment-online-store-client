import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ImGift } from "react-icons/im";

const Header = () => {
  const { users, logout } = useContext(AuthContext);
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allSports">All Sports Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/addEquipment">Add Equipment</NavLink>
      </li>
      <li>
        <NavLink to="/myEquipment">My Equipment List</NavLink>
      </li>
    </>
  );
  return (
    <div className=" bg-blue-400">
      <div className="navbar container mx-auto ">
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
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <img
            className=" h-10 w-24 md:w-36 md:h-14 "
            src="https://i.ibb.co.com/xHrcBkp/images-removebg-preview.png"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end flex gap-3">
          {users && (
            <p className=" ">
              <img
                title={users.displayName}
                className="w-12 h-12 border cursor-pointer object-cover rounded-full"
                src={users.photoURL}
                alt=""
              />
            </p>
          )}
          {users && users?.email ? (
            <button
              onClick={logout}
              className="px-3 py-2 font-semibold bg-white rounded-lg"
            >
              Logout
            </button>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-white rounded-lg font-semibold"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
