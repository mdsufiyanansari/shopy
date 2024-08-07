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
    <div className="h-screen py-24 flex">
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

      <div className="w-full h-full  md:flex md:flex-wrap justify-center md:gap-4 md:p-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="md:w-[80%] md:h-[350px]  mt-2 w-[400px] h-[400px] border-l p-4 md:flex"
          >
            <div className="h-full  justify-center w-1/2">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="md:w-[280px] md:h-[280px]  h-[150px] w-[150px] hover:scale-105 cursor-pointer duration-500"
              />
            </div>

            <div className="w-full h-1/2 m  md:px-4 md:py-2  ">
              <h2 className="md:text-2xl text-xl font-bold">{product.title}</h2>
              <p className="text-gray-600 hidden md:block mt-2">{product.description}</p>
              <p className="font-bold md:text-2xl md:mt-2">
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
                <span className="ml-2 md:flex hidden md:block">{renderStars(product.rating)}</span>
              </p>
              <div className="w-full p-1 md:flex mt-2 gap-2">
              <Link to={`/product/${product.id}`}>
                  <button className="text-xl text-white bg-blue-950 font-semibold hover:bg-blue-900 duration-500 px-6 py-1 relative">
                    View Product
                  </button>
                </Link>
                <button className="text-xl hidden md:block text-white bg-blue-950 md:ml-4 font-semibold hover:bg-blue-900 duration-500 px-6 py-1 relative">
                  <FaCartShopping className="absolute left-1 top-2" />
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
         <div className="w-[80%] center  h-[250]  gap-14 flex flex-wrap p-2 ">
          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://www.prodesigns.com/backend/img/sliders/jewelry/1523622008-03.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://peppermint.in/cdn/shop/files/Peppermint-Brand_1200x1200.png?v=1627303431"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3  animate-pulse shadow-lg   center bg-black">
            <img
              src="https://lirp.cdn-website.com/b8acf601/dms3rep/multi/opt/QualityFoodsLogo-01-1920w.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://pimwp.s3-accelerate.amazonaws.com/2022/06/Licious-Logo.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-400 center">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/Garnier-Logo.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/LOreal-Logo.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://logos-world.net/wp-content/uploads/2022/04/Ashley-Logo.png"
              alt=""
            />
          </div>

          <div className="w-60 h-32 p-3 shadow-lg animate-pulse  bg-slate-50 center">
            <img
              src="https://thrivemyway.com/wp-content/uploads/2022/03/Nike-Logo-Shoe-Brands.png"
              alt=""
            />
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Home;
