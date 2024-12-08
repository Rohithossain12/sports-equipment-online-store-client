import React, { useContext } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Login = () => {
  const navigate = useNavigate();

  const {
    loginWithGoogle,
    setUsers,
    loginUser,
    users,
    errorMessage,
    setErrorMessage,
  } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUsers(user);
        toast.success("User Login Successful");

        navigate("/");
      })
      .catch(() => {
        toast.error("User Login Unsuccessful");
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;

    const email = form.email.value;
    const password = form.password.value;

    // reset error message status
    setErrorMessage("");

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(" at least one uppercase,one lowercase,one number");
      return;
    }

    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        toast.success("User login successful");
        event.target.reset();
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className=" mt-10 mb-10 container mx-auto px-5">
      <Helmet>
        <title>Sport Specialist | Login </title>
      </Helmet>
      <div className="  max-w-lg mx-auto bg-base-300  p-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-8">Please Login Now </h1>
        <form onSubmit={handleLogin} className="card-body ">
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
              placeholder="Enter Your Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="max-w-lg mt-6">
            <button className="btn  w-full bg-gradient-to-r from-indigo-500 text-white text-lg via-purple-500 to-pink-500   font-bold">Login</button>
          </div>
        </form>
        <div className="max-w-lg px-8">
          <button onClick={handleGoogleLogin} className="btn w-full font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white ">
            <FaGoogle />
            Login With Google
          </button>
        </div>
        <p className="ml-8 font-bold pt-5 pb-2">
          Don't have an account yet ?{" "}
          <Link to="/register" className="text-red-500">
            Please Register
          </Link>{" "}
        </p>

        {errorMessage && <p className="text-red-500 ml-8">{errorMessage}</p>}
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
