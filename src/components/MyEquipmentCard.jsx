import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipmentCard = ({ product, setProducts, products }) => {
    const { _id, name, photo, category, price, quantity } = product || {};

  //   const [pro, setPro] = useState(product);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/product/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "product has been deleted.",
                icon: "success",
              });
              const remaining = products.filter((pro) => pro._id !== id);
              setProducts(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="  p-2">
        <img
          className="w-[328px] h-[193px] object-cover rounded-lg"
          src={photo}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Category : {category}</p>
        <p>Price : {price} tk</p>
        <p>Quantity : {quantity}</p>
        <div className="card-actions justify-end">
          <Link to={`/update/${_id}`}>Update</Link>
          <button onClick={() => handleDelete(_id)}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyEquipmentCard;
