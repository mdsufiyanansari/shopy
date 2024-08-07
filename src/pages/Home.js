import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCartShopping } from "react-icons/fa6";
import { AiTwotoneThunderbolt } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        console.log(response.data.products);
        setProducts(response.data.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="flex justify-center items-center">Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars)
          .fill()
          .map((_, i) => (
            <FaStar key={`full-${i}`} className="text-yellow-500" />
          ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-500" />}
        {Array(emptyStars)
          .fill()
          .map((_, i) => (
            <FaRegStar key={`empty-${i}`} className="text-yellow-500" />
          ))}
      </>
    );
  };

  return (
    <div className="h-screen py-20 flex">
      <div className="w-[400px] h-screen bg-blue-950 p-2">
        <h1 className="text-center text-4xl font-bold text-white">
          Shopping Cart
        </h1>
        <ul className="h-full text-2xl font-semibold w-full mt-4 leading-[3]">
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Beauty</li>
          <hr />
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Electronics</li>
          <hr />
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Clothing</li>
          <hr />
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Kids</li>
          <hr />
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Home & Garden</li>
          <hr />
          <li className="cursor-pointer mt-2 px-2 hover:text-gray-600 duration-500">Books</li>
          <hr />
        </ul>
      </div>

      <div className="w-full h-full flex flex-wrap justify-center gap-4 p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="w-[80%] h-[350px] border-l p-4 flex"
          >
            <div className="h-full flex justify-center w-1/2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-[280px] h-[280px] hover:scale-105 cursor-pointer duration-500"
              />
            </div>

            <div className="w-full h-1/2 px-4 py-2">
              <h2 className="text-2xl font-bold">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="font-bold text-2xl mt-2">
                <span className="text-yellow-400">$</span> {product.price}
              </p>
              <p className="text-2xl text-red-500 font-semibold">
                {product.discountPercentage}%
              </p>
              <p className="text-xl font-semibold">
                rating:{" "}
                <span className="bg-yellow-400 px-2 rounded-full">
                  {product.rating}
                </span>
                <span className="ml-2 flex">{renderStars(product.rating)}</span>
              </p>
              <div className="w-full p-1 mt-2 gap-2">
                <button className="text-xl text-white bg-blue-950 font-semibold hover:bg-blue-900 duration-500 px-6 py-1 relative">
                  <AiTwotoneThunderbolt className="absolute left-1 top-2" />
                  BUY NOW
                </button>
                <button className="text-xl text-white bg-blue-950 ml-4 font-semibold hover:bg-blue-900 duration-500 px-6 py-1 relative">
                  <FaCartShopping className="absolute left-1 top-2" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
