import React from "react";
import { Link } from "react-router-dom";

const ProductSection = ({ product }) => {
  const { _id, name, photo, category, price, quantity } = product || {};
  return (
    <div className="card bg-base-300 hover:bg-white transition hover:scale-105 shadow-xl">
      <figure className="  p-2">
        <img
          className="w-[328px] h-[193px] object-cover rounded-lg"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">Name: {name}</h2>
        <p>Category : {category}</p>
        <p>Price : {price} tk</p>
        <p>Quantity : {quantity}</p>
        <div className="card-actions ">
          <Link
            to={`/viewDetails/${product._id}`}
            className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-1.5 px-3 rounded-2xl mt-2 text-white font-bold"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSection;
