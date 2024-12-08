import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

const Header = () => {
  const { users, logout, handleToggleTheme } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle mouse events to control menu visibility
  const handleMouseEnter = () => {
    setIsMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsMenuOpen(false);
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        {" "}
        <NavLink to="/allSports">All Sports Equipment</NavLink>
      </li>
      <li>
        {users?.email && <NavLink to="/addEquipment">Add Equipment</NavLink>}
      </li>
      <li>
        {users?.email && <NavLink to="/myEquipment">My Equipment List</NavLink>}
      </li>
    </>
  );
  return (
    <div className=" bg-base-300 relative">
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
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
          {users?.email ? (
            <div>
              <img
                className="w-12 h-12 rounded-full cursor-pointer"
                src={users.photoURL}
                alt="User"
                onMouseEnter={handleMouseEnter}
                onMouseDownCapture={handleMouseLeave}
              />
              {isMenuOpen && (
                <div
                  className="absolute right-2  mt-4 w-44 bg-white rounded-lg shadow-lg z-10"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="p-4 border-b text-center">
                    <p className="text-sm text-gray-700">{users.displayName}</p>
                  </div>
                  <div className="text-center justify-center gap-2 p-4 border-b flex">
                    <p>Light</p>
                    <input
                      onClick={handleToggleTheme}
                      type="checkbox"
                      value="synthwave"
                      className="toggle theme-controller"
                    />
                    <p>Dark</p>
                  </div>
                  <button
                    onClick={logout}
                    className="w-full text-center px-4 py-3 text-lg text-gray-700 hover:bg-gray-200"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  rounded-lg font-semibold text-white"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-lg font-semibold"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
