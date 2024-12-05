import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";

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
          {/* // title={users.displayName} */}
          {/* {users && <p className=" "></p>} */}

          {users?.email ? (
            <div className="dropdown ">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-12 h-12 border cursor-pointer object-cover rounded-full "
                  src={users.photoURL}
                  alt=""
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content mt-2 menu bg-base-100 rounded-box z-[1] w-52 p-6 shadow -right-0  "
              >
                <li className="mb-2">
                  <p className="font-bold">{users.displayName}</p>
                </li>
                <li>
                  <button onClick={logout} className="btn bg-green-500">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
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
