import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import { FaCartShopping } from "react-icons/fa6";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="flex justify-center items-center h-screen text-2xl font-semibold text-blue-900">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-red-600 text-xl mt-10">Error: {error.message}</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill().map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars).fill().map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="h-screen flex bg-gradient-to-r from-gray-100 to-gray-200">
      {/* Sidebar */}
      <div className="w-[280px] mt-20 bg-gradient-to-b from-blue-950 to-blue-900 text-white p-6 rounded-r-3xl shadow-xl sticky top-0 h-[90%]">
        <h1 className="text-center text-3xl font-bold tracking-wide">Categories</h1>
        <ul className="mt-10 space-y-5 text-lg font-medium">
          {["Beauty", "Electronics", "Clothing", "Kids", "Home & Garden", "Books"].map((category, index) => (
            <li
              key={index}
              className="cursor-pointer hover:translate-x-2 hover:text-yellow-300 transition-all duration-300 ease-in-out"
            >
              {category}
            </li>
          ))}
        </ul>
      </div>

      {/* Products */}
      <div className="flex flex-wrap mt-20 justify-center gap-12 px-8 py-8 w-full overflow-y-scroll">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-full md:w-[600px] h-[370px] bg-white/90 backdrop-blur-lg border border-gray-200 rounded-3xl shadow-2xl overflow-hidden transform transition-all hover:scale-[1.03] duration-300"
          >
            <div className="flex h-full">
              {/* Image */}
              <div className="w-[250px] h-full bg-white flex justify-center items-center p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="w-[150px] h-[150px] object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
                  <p className="text-sm text-gray-600 mt-1 line-clamp-3">{product.description}</p>
                </div>

                <div className="flex justify-between items-center mt-4">
                  <p className="text-xl font-bold text-blue-900">
                    <span className="text-yellow-500">$</span> {product.price}
                  </p>
                  <p className="text-md font-semibold text-red-500">{product.discountPercentage}% OFF</p>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <p className="text-md text-gray-700">
                    Rating: <span className="bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">{product.rating}</span>
                  </p>
                  <div className="flex items-center gap-1">{renderStars(product.rating)}</div>
                </div>

                <div className="mt-4 flex justify-between gap-4">
                  <Link to={`/product/${product.id}`}>
                    <button className="text-sm md:text-base bg-blue-950 text-white rounded-full px-6 py-2 hover:bg-blue-900 transition duration-300 shadow-md">
                      View Product
                    </button>
                  </Link>
                  <button className="text-sm md:text-base bg-blue-950 text-white rounded-full px-6 py-2 flex items-center hover:bg-blue-900 transition duration-300 shadow-md">
                    <FaCartShopping className="mr-2" /> ADD TO CART
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
