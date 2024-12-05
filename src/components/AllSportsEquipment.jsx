import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const products = useLoaderData();
  return (
    <div className="overflow-x-auto  px-5 container mx-auto mt-10 mb-12">
      <table className="table table-xs table-pin-rows table-pin-cols">
        <thead>
          <tr>
            <td>Name</td>
            <td>Category</td>
            <td>Price</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td className="p-5">{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              <td>
                <Link
                  to={`/viewDetails/${product._id}`}
                  className="px-2 py-2  bg-green-500 rounded-lg"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSportsEquipment;
