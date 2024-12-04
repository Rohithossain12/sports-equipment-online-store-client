import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <img src="https://i.ibb.co.com/jLgrBRw/404.gif" alt="" />
      <Link
        to="/"
        className="-mt-20 btn text-white font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
