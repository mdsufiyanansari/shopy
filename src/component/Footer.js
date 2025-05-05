import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white pt-12 px-6 md:px-20 pb-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-blue-900 pt-10">

        {/* Branding */}
        <div>
          <h2 className="text-3xl font-bold mb-4">ShopEase</h2>
          <p className="text-sm text-gray-300">
            Elevate your everyday shopping experience. Find everything you need — quality, style, and service in one place.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/products" className="hover:text-white">Products</Link></li>
            <li><Link to="/cart" className="hover:text-white">Cart</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li><Link to="/faq" className="hover:text-white">FAQs</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            <li><Link to="/returns" className="hover:text-white">Return Policy</Link></li>
            <li><Link to="/shipping" className="hover:text-white">Shipping Info</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
          <p className="text-sm text-gray-300 mb-4">Get the latest deals and updates right in your inbox.</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full p-2 rounded-l-full text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-300 text-black px-4 py-2 rounded-r-full font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-400 text-sm mt-10 border-t border-blue-900 pt-6">
        © {new Date().getFullYear()} ShopEase. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
