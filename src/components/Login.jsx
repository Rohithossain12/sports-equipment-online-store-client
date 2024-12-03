import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className=" mt-10 mb-10 container mx-auto px-5">
      <div className="  max-w-lg mx-auto bg-green-500  p-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-8">Please Register Now </h1>
        <form className="card-body ">
          <div className="form-control max-w-lg ">
            <label className="label">
              <span className="label-text font-bold">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control max-w-lg ">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter coffee Price"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="max-w-lg mt-6">
            <button className="btn  w-full  font-bold">
              Register
            </button>
          </div>
        </form>
        <div className="max-w-lg px-8">
        <button className="btn w-full font-bold ">Login With Google</button>
        </div>
        <p className="ml-8 font-bold pt-5">
          You have an Already Account ?{" "}
          <Link to="/register" className="text-red-500">
            Please Login
          </Link>{" "}
        </p>
       
      </div>
    </div>
  );
};

export default Login;
