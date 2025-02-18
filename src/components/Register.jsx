import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet";

const Register = () => {
  const navigate = useNavigate();
  const {
    loginWithGoogle,
    setUsers,
    updateUserProfile,
    errorMessage,
    createUser,
    setErrorMessage,
  } = useContext(AuthContext);

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const user = result.user;
        setUsers(user);
        toast.success("User Register Successful");

        navigate("/");
      })
      .catch(() => {
        toast.error("User Register Unsuccessful");
      });
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;

    // reset error message
    setErrorMessage("");

    if (password.length < 6) {
      setErrorMessage("password should be 6 character or longer");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage(" at least one uppercase,one lowercase,one number");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUsers(user);
        toast.success("User Register Successful");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {})
          .catch((error) => {
            setErrorMessage(error);
          });
        navigate("/");
        form.reset();
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  return (
    <div className=" mt-10 mb-10 container mx-auto px-5 ">
      <Helmet>
        <title>Sport Specialist | Register</title>
      </Helmet>
      <div className="  max-w-lg mx-auto border bg-base-300  p-5 rounded-lg">
        <h1 className="text-2xl font-bold ml-8 ">Please Register Now </h1>
        <form onSubmit={handleRegister} className="card-body ">
          <div className="form-control max-w-lg ">
            <label className="label">
              <span className="label-text font-bold">Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control max-w-lg ">
            <label className="label">
              <span className="label-text font-bold">email</span>
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
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Photo-URl"
              name="photo"
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
              placeholder="Enter Password"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="max-w-lg mt-6">
            <button className="btn  w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white text-lg  font-bold">
              Register
            </button>
          </div>
        </form>
        <div className="max-w-lg px-8">
          <button
            onClick={handleGoogleLogin}
            className="btn w-full font-bold text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white"
          >
            <FaGoogle /> Login With Google
          </button>
        </div>
        <p className="ml-8 font-bold pt-5 pb-3">
          You have an Already Account ?{" "}
          <Link to="/login" className="text-red-500">
            Please Login
          </Link>{" "}
        </p>
        {errorMessage && (
          <p className="text-red-500 font-bold ml-8 pb-5">{errorMessage}</p>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default Register;
