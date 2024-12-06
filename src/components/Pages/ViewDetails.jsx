import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const product = useLoaderData();
  console.log(product);
  const {
    name,
    category,
    photo,
    description,
    price,
    rating,
    customization,
    time,
    quantity,
  } = product || {};

  return (
    <div className="mt-10 mb-10 px-5   ">
      <div className="flex flex-col md:flex-row max-w-2xl  border rounded-xl  space-y-4  mx-auto gap-5 ">
        <div className=" p-4 pr-0 ">
          <img
            className="w-[309px] h-[242px] overflow-hidden rounded-lg "
            src={photo}
            alt=""
          />
        </div>
        <div className="spacey-5 ml-5 md:ml-0  ">
          <h2 className="text-lg font-bold">Name: {name}</h2>
          <p>Category : {category}</p>
          <p>Description: {description}</p>
          <p>Price : {price}</p>
          <p>Customization : {customization}</p>
          <p>Rating: {rating}</p>
          <p>Delivery Time : {time}</p>
          <p className="mb-4 ">Quantity : {quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
