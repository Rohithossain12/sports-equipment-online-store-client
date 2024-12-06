import React from "react";

const UpdateProduct = () => {
  return (
    <div className="mt-10 mb-10 bg-[#F4F3F0] container mx-auto rounded-lg">
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
        <form className="card-body">
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
          {/*Rating and Customization row
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
          {/* delivery time and Quantity row */}
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
            <button className="btn bg-[#D2B48C] font-bold">
              Update Equipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
