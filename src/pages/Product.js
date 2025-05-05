import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [id]);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <div className="flex items-center gap-1">
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
      </div>
    );
  };

  if (loading) {
    return <p className="flex justify-center items-center h-screen text-xl font-semibold text-blue-900">Loading...</p>;
  }

  if (error) {
    return <p className="flex justify-center items-center h-screen text-xl text-red-600">Error: {error.message}</p>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row transition-all duration-300">
        
        {/* Image */}
        <div className="w-full md:w-1/2 p-6 flex justify-center items-center bg-white rounded-l-3xl">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[300px] h-[300px] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold text-blue-950 mb-2">{product.title}</h1>
            <p className="text-gray-600 text-md mb-4">{product.description}</p>
            
            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Brand:</span> {product.brand}</p>
              <p><span className="font-semibold">Category:</span> {product.category}</p>
              <p><span className="font-semibold">Stock Available:</span> {product.stock}</p>
              <p className="text-2xl font-bold text-green-600 mt-2">
                ${product.price}
                <span className="text-sm font-medium ml-2 text-red-500">({product.discountPercentage}% OFF)</span>
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="text-lg font-semibold text-gray-800">Rating:</span>
                <span className="bg-yellow-300 text-white font-bold px-2 py-1 rounded-full">{product.rating}</span>
                {renderStars(product.rating)}
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-8">
            <button className="w-full bg-blue-900 text-white py-3 px-6 rounded-full text-lg font-semibold hover:bg-blue-800 transition-all duration-300 shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
