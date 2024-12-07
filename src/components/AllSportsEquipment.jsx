import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const AllSportsEquipment = () => {
  const products = useLoaderData();

  return (
    <div className="overflow-x-auto min-h-screen px-5 container mx-auto mt-10 mb-12">
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
      <div className="text-center mt-4">
        <button className="px-3 py-2 rounded-lg bg-green-500">
          Sort by Price
        </button>
      </div>
    </div>
  );
};

export default AllSportsEquipment;
