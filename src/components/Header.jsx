import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { ImGift } from "react-icons/im";

const Header = () => {
  const { users } = useContext(AuthContext);
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
    <div className="bg-[#D2B48C] ">
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
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {users?.email ? (
            <p className="  ">
              <img
                className="w-12 h-12 rounded-full"
                src={users?.photoURL}
                alt=""
              />
            </p>
          ) : (
            <NavLink className="py-2 px-3 bg-white rounded-lg" to="/login">
              Login
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
