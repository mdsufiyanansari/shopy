import React from 'react';
import { RiSearchEyeLine } from "react-icons/ri";

const Navbar = () => {
  return (
    <div className="h-20 w-full fixed top-0 left-0 border-b-2 border-black z-50 flex items-center justify-evenly px-4 bg-black bg-opacity-30 backdrop-blur-lg backdrop-saturate-150 shadow-lg">
      <div className=" w-[200px] flex items-center">
        <img src="https://graphicsfamily.com/wp-content/uploads/edd/2020/12/Free-Logo-Design-Template-for-Online-Store-PNG-transparent.png" alt="Logo" className="h-full w-full" />
      </div>
      <h1 className="text-4xl tracking-wide font-bold text-white text-center">Welcome to Shopy! <br /><span className="text-xl font-semibold  text-gray-700">Discover Our Products</span></h1>
      
     
      <div className="relative w-[300px] h-full flex items-center">
        <RiSearchEyeLine className="absolute left-3 text-3xl text-black"/>
        <input type="text" className="w-full py-2 pl-12 pr-4 rounded-full bg-transparent border border-black text-xl outline-none placeholder-black" placeholder="Search..." />
      </div>
    </div>
  );
};

export default Navbar;
