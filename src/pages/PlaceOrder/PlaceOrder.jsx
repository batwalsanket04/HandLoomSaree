import React, { useContext } from "react";
import { context } from "../../Context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(context);

  return (
    <form className="place-order pt-[100px] px-4 md:px-6 bg-gray-50 min-h-screen">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Left - Delivery Information */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <p className="text-xl font-semibold text-gray-800 mb-6">
            Delivery Information
          </p>

          {/* Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="First Name"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Email */}
          <input
            type="text"
            placeholder="Email Address"
            className="w-full border border-pink-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* Street */}
          <input
            type="text"
            placeholder="Street"
            className="w-full border border-pink-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />

          {/* City & State */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="City"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="State"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Zip & Country */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              type="text"
              placeholder="Zip-code"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
            <input
              type="text"
              placeholder="Country"
              className="border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
            />
          </div>

          {/* Phone */}
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-pink-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
        </div>

        {/* Right - Cart Summary */}
        <div className="bg-gray-50 p-6 rounded-xl shadow-inner">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Cart Details
          </h2>

          <div className="flex justify-between py-2 text-gray-700">
            <p>SubTotal</p>
            <p>₹{getTotalCartAmount}</p>
          </div>
          <hr />
          <div className="flex justify-between py-2 text-gray-700">
            <p>Delivery Fee</p>
            <p>₹180</p>
          </div>
          <hr />
          <div className="flex justify-between py-3 font-semibold text-gray-900 text-lg">
            <p>Total</p>
            <p>₹{getTotalCartAmount() + 180}</p>
          </div>

          <button className="w-full bg-pink-600 text-white py-3 rounded-full mt-4 font-medium hover:bg-pink-700 transition">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
 