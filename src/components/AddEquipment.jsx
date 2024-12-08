import React, { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const AddEquipment = () => {
  const { users } = useContext(AuthContext);
  const { displayName, email } = users || {};
  const handleAddEquipment = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const category = form.category.value;
    const description = form.description.value;
    const price = form.price.value;
    const rating = form.rating.value;
    const customization = form.customization.value;
    const time = form.time.value;
    const quantity = form.quantity.value;
    const photo = form.photo.value;

    const newProduct = {
      name,
      displayName,
      email,
      category,
      description,
      price,
      rating,
      customization,
      time,
      quantity,
      photo,
    };

    // sent data to the server
    fetch("http://localhost:5000/product", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Equipment Added Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
          form.reset();
        }
      });
  };
  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
      <Helmet>
        <title>Sport Specialist | Add Equipment</title>
      </Helmet>
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#374151] md:text-2xl text-xl lg:text-4xl font-bold text-center">
          Add New Equipment
        </h1>

        <p className="text-center mt-5">
          "Gear up with our sports online store! Explore a wide selection of
          high-quality sports equipment, apparel, and accessories for every
          athlete and fitness enthusiast. Shop now for unbeatable performance
          and fast delivery!"
        </p>
        <form onSubmit={handleAddEquipment} className="card-body">
          {/* email and user name row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Email</span>
              </label>
              <input
                readOnly
                value={email}
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">User Name</span>
              </label>
              <input
                readOnly
                value={displayName}
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* item name and category row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Item Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter item name"
                name="name"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Category Name</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter Category Name"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Description and Price row */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Description</span>
              </label>
              <input
                type="text"
                name="description"
                placeholder="Enter Description"
                className="input input-bordered w-full"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Price</span>
              </label>
              <input
                type="text"
                placeholder="Enter Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Rating and Customization row
           */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <input
                type="text"
                placeholder="Enter Rating"
                name="rating"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Customization</span>
              </label>
              <input
                type="text"
                name="customization"
                placeholder="Enter Customization"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* Delivery Time and Product Quantity row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Delivery Time</span>
              </label>
              <input
                type="text"
                placeholder="Enter Processing Time"
                name="time"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Product Quantity</span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="Enter Product Quantity"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          <div className="form-control ">
            <label className="label">
              <span className="label-text font-bold">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-lg text-white">
              Add Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEquipment;
