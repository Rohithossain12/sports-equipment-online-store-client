import React from "react";
import { Toaster } from "react-hot-toast";
import Banner from "./Banner/Banner";
import SportingGoods from "./SportingGoods";
// import Banner from "./Banner";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <Toaster />
      <Banner></Banner>
      <section className="container mx-auto px-5">
        <SportingGoods></SportingGoods>
      </section>
    </div>
  );
};

export default Home;
