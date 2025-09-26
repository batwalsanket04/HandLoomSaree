import React, { useContext, useState } from "react";
import { context } from "../../Context/StoreContext";
import { ShoppingCart, Eye } from "lucide-react";

const Collection = () => {
  const { SareeList2, addToCart } = useContext(context);
  const [filter, setFilter] = useState("All");

  const categories = ["All", ...new Set(SareeList2.map((s) => s.category))];

  const filteredSarees =
    filter === "All"
      ? SareeList2
      : SareeList2.filter((saree) => saree.category === filter);

  return (
    <div className="pt-[100px] bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="text-center py-12 bg-gradient-to-r from-pink-50 to-pink-100">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-700">
          Our Exclusive Saree Collection
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover a variety of handpicked sarees, curated just for you.  
          Choose from elegant silks, trendy cottons, and timeless designs.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4 mt-10 mb-8 px-6">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-6 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-pink-600 text-white border-pink-600"
                : "bg-white text-gray-700 border-gray-300 hover:bg-pink-100"
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid Layout */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6 pb-16">
        {filteredSarees.map((saree) => (
          <div
            key={saree.id}
            className="group relative bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
          >
            {/* Image Section with Hover Overlay */}
            <div className="relative w-full h-72 overflow-hidden">
              <img
                src={saree.img}
                alt={saree.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
              />

              {/* Black Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition flex items-center justify-center gap-4 opacity-0 group-hover:opacity-75">
                <button
                  onClick={() => addToCart(saree.id)}
                  className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition"
                >
                  <ShoppingCart size={20} />
                </button>
                <button className="bg-white text-gray-700 p-3 rounded-full hover:bg-gray-100 transition">
                  <Eye size={20} />
                </button>
              </div>
            </div>

            {/* Info Section */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {saree.name}
              </h3>
              <p className="text-pink-600 font-bold mt-2">{saree.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;
