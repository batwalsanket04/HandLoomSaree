import React from "react";

const SareeItem = ({ id, name, price, description, img, category }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative w-full h-60">
        <img
          src={img}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-1">
        {/* Name + Category */}
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-sm text-pink-600 font-medium">{category}</p>

        {/* Rating */}
        <div className="flex items-center space-x-1 text-yellow-400 mt-2">
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star"></i>
          <i className="fa-solid fa-star-half-stroke"></i>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-2 flex-1">{description}</p>

        {/* Price + Button */}
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-bold text-pink-600">{price}</span>
          <button className="bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default SareeItem;
