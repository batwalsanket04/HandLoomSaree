import React, { useState } from "react";
import { Menu, X, ShoppingCart, Search } from "lucide-react";

const Navbar = ({setShowLogine}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Brand Logo */}
        <h1 className="text-2xl font-serif text-pink-700 whitespace-nowrap">
          Handloom Sarees
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-700 font-medium">
          <li><a href="#" className="hover:text-pink-600">Home</a></li>
          <li><a href="#" className="hover:text-pink-600">Collections</a></li>
          <li><a href="#" className="hover:text-pink-600">About Us</a></li>
          <li><a href="#" className="hover:text-pink-600">Contact</a></li>
        </ul>

        {/* Right Section */}
        <div className="flex items-center space-x-6">
          {/* Search */}
          <button className="hidden md:block text-gray-700 hover:text-pink-600">
            <Search size={22} />
          </button>

          {/* Cart */}
          <button className="hidden md:block relative text-gray-700 hover:text-pink-600">
            <ShoppingCart size={22} />
            <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* CTA Button */}
          <button className="hidden md:block bg-pink-600 text-white px-6 py-2 rounded-full hover:bg-pink-700 transition"onClick={()=>setShowLogine(true)} >
            Sign In
          </button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-md px-6 py-4 space-y-4">
          <a href="#" className="block text-gray-700 hover:text-pink-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">Collections</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">About Us</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">Contact</a>
          <button className="w-full bg-pink-600 text-white px-4 py-2 rounded-full hover:bg-pink-700"onClick={()=>setShowLogine(true)} >
            Sign In
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
