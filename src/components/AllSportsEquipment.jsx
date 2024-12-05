import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const products = useLoaderData();
  return (
    <div className="min-h-screen mt-10 ">
      <div className="overflow-x-auto  container mx-auto  ">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Product Id</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr className="bg-base-200  ">
                <th>{product._id}</th>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                  <Link
                    to={`/viewDetails/${product._id}`}
                    className="px-3 py-2 bg-green-500 rounded-lg"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
