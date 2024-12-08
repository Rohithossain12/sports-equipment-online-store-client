import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const products = useLoaderData();

  const [allProduct, setAllProduct] = useState([]);

  useEffect(() => {
    setAllProduct(products);
  }, [products]);

  const handleSortByPrice = () => {
    const sortedProducts = [...allProduct].sort((a, b) => {
      return Number(b.price) - Number(a.price);
    });
    setAllProduct(sortedProducts);
  };

  return (
    <div className="overflow-x-auto  min-h-screen px-5 container mx-auto mt-10 mb-12">
      <Helmet>
        <title>Sport Specialist | All Sports Equipment</title>
      </Helmet>
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
          {allProduct.map((product) => (
            <tr>
              <td className="p-5">{product?.name}</td>
              <td>{product?.category}</td>
              <td>{product?.price}</td>
              <td>
                <Link
                  to={`/viewDetails/${product._id}`}
                  className="px-3 py-2  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-white font-bold rounded-full"
                >
                  Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="text-center mt-4">
        <button
          onClick={handleSortByPrice}
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  py-1.5 px-3 rounded-2xl mt-2 text-white font-bold"
        >
          Sort by Price
        </button>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
