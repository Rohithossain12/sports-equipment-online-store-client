import React from "react";
import { Toaster } from "react-hot-toast";
import Banner from "./Banner/Banner";
// import Banner from "./Banner";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Banner></Banner>
    </div>
  );
};

export default Home;
