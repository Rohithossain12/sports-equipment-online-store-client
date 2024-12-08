import React from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const product = useLoaderData();

  const {
    category,
    _id,
    customization,
    description,
    displayName,
    email,
    name,
    photo,
    price,
    quantity,
    rating,
    time,
  } = product || {};

  const handleUpdate = (event) => {
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

    const updatedProduct = {
      name,
      category,
      description,
      price,
      rating,
      customization,
      time,
      quantity,
      photo,
    };

    fetch(`http://localhost:5000/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Close",
          });
        }
      });
  };

  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
     <Helmet>
        <title>Sport Specialist | Update Product</title>
     </Helmet>
      <div className="card   shrink-0 p-16">
        <h1 className="text-[#374151] text-4xl font-bold text-center">
          Update Equipment
        </h1>

        <p className="text-center mt-5">
          "Gear up for greatness with our extensive collection of sports
          products and equipment. Whether you're a beginner or a pro, find
          top-quality gear to enhance your performance and fuel your passion for
          sports." Let me know if you'd like more options!
        </p>
        <form onSubmit={handleUpdate} className="card-body">
          {/* User name and email row */}
          <div className="md:flex gap-5">
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
                defaultValue={name}
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
                defaultValue={category}
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
                defaultValue={description}
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
                defaultValue={price}
                placeholder="Enter Price"
                name="price"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/*Rating and Customization row
           */}

          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Rating</span>
              </label>
              <input
                type="text"
                defaultValue={rating}
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
                defaultValue={customization}
                placeholder="Enter Customization"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* delivery time and Quantity row */}
          <div className="md:flex gap-5">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text font-bold">Delivery Time</span>
              </label>
              <input
                type="text"
                defaultValue={time}
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
                defaultValue={quantity}
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
              defaultValue={photo}
              placeholder="Enter photo URL"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#D2B48C] font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white">
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
