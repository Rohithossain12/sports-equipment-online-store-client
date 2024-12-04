import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();

  const { loginWithGoogle, setUsers, users } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUsers(user);
        toast.success("User Register successful");

        navigate("/");
      })
      .catch(() => {
        toast.error("User Register Unsuccessful");
      });
  };



  return (
    <div className=" mt-10 mb-10 container mx-auto px-5">
      <div className="  max-w-lg mx-auto bg-green-500  p-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-8">Please Login Now </h1>
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
            <button className="btn  w-full  font-bold">Login</button>
          </div>
        </form>
        <div className="max-w-lg px-8">
          <button onClick={handleGoogleLogin} className="btn w-full font-bold ">
          <FaGoogle />
            Login With Google
          </button>
        </div>
        <p className="ml-8 font-bold pt-5 pb-5">
          You have an Already Account ?{" "}
          <Link to="/register" className="text-red-500">
            Please Register
          </Link>{" "}
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
