import React from 'react';
import { RiSearchEyeLine, RiShoppingCartLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed top-0 left-0 z-50 flex items-center justify-between px-8 bg-white/10 backdrop-blur-lg backdrop-saturate-200 shadow-xl">
      
      {/* Logo Section */}
      <div className="flex items-center gap-3">
        <img
          src="https://graphicsfamily.com/wp-content/uploads/edd/2020/12/Free-Logo-Design-Template-for-Online-Store-PNG-transparent.png"
          alt="Logo"
          className="h-14 w-14 object-contain hover:scale-110 transition-transform duration-300"
        />
        <h1 className="hidden md:block text-2xl font-extrabold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-pulse">
          Shopy
        </h1>
      </div>

      {/* Center Text */}
      <div className="text-center space-y-1">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-fuchsia-500 via-pink-500 to-rose-500 bg-clip-text text-transparent animate-gradient-x">
          Welcome to Shopy!
        </h2>
        <p className="hidden md:block text-gray-200 text-sm tracking-wider">
          Explore Top Products Just for You
        </p>
      </div>

      {/* Search + Cart Section */}
      <div className="flex items-center gap-6">
        
        {/* Search Section */}
        <div className="relative w-40 md:w-72">
          <RiSearchEyeLine className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-2xl" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full py-2 pl-12 pr-4 rounded-full bg-white/20 text-black placeholder-gray-700 backdrop-blur-md border border-gray-400 focus:border-pink-400 focus:ring-2 focus:ring-pink-300 outline-none transition-all duration-300"
          />
        </div>

        {/* Cart Section */}
        <div className="relative cursor-pointer">
          <RiShoppingCartLine className="text-4xl  hover:text-pink-400 transition-colors duration-300" />
          {/* Badge */}
          <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs font-bold rounded-full px-1.5 py-0.5 animate-bounce">
            3
          </span>
        </div>

      </div>

    </div>
  );
};

export default Navbar;
