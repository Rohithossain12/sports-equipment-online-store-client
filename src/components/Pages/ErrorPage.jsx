import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src="https://i.ibb.co.com/jLgrBRw/404.gif" alt="" />
      <Link
        to="/"
        className="-mt-20 btn text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
