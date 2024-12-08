import React from "react";
import { FadeLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <FadeLoader aria-setsize={50} />
    </div>
  );
};

export default LoadingPage;
