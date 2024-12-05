import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const product = useLoaderData();
  console.log(product);
  return (
    <div className="min-h-screen flex justify-center items-center">
      <h1>{product.name}</h1>
    </div>
  );
};

export default ViewDetails;
