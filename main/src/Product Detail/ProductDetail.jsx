import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Description from "./Description";
import RelatedProducts from "./RelatedProducts";
import { useCart } from "../Context/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { state } = useLocation();
  const { id } = useParams();

  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  // if user goes to /product/:id directly without coming from sorting page
  if (!state?.product) {
    return <p>Product not found. Please go back to shop.</p>;
  }

  const product = state.product;
  console.log(product);
  console.log(product.Image);

  return (
    <div>
      <Navbar />
      <div className="p-10 grid md:grid-cols-2 w-full min-h-screen">
        <div className="pr-10 flex flex-col">
          <img
            src={product.Image?.url}
            alt={product.plant_name}
            className="w-full h-auto object-cover mb-4 "
          />
        </div>
        <div className="flex flex-col h1font ">
          <span className="text-gray-400">
            <Link to={"/"}>
              Home/{" "}
              <span>
                <Link to={"/shop"}>{product.place}/ </Link>
              </span>
            </Link>
            <span>{product.plant_name}</span>
          </span>

          <Link to={"/shop"} className="text-green-600 py-3 h1font">
            {product.place}
          </Link>

          <h1 className="text-xl font-medium">{product.plant_name}</h1>
          <p className="text-gray-600 mt-2">${product.Cost}</p>
          <p className="text-sm text-gray-500 mt-2">{product.place}</p>
          <p className=" text-gray-500 mt-2 md:w-[70%]">{product.des}</p>
          <p className="py-10  text-gray-500 mt-2 md:w-[70%] ">
            {product.des2}
          </p>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 text-center border border-gray-300 rounded py-1"
              onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button
              className="px-4 py-1 bg-[#698927] text-white rounded-full hover:opacity-[75%]"
              onClick={() => addToCart(product, quantity)}
            >
              Add to Cart
            </button>
          </div>
          <hr className=" mx-10 border-gray-300 mt-10" />
          <span className="mx-10 text-gray-500 text-sm">
            category by:{" "}
            <Link to={"/shop"} className="text-[#698927]">
              {product.place}
            </Link>
          </span>
        </div>
      </div>
      <hr className=" mx-10 border-gray-300 mt-10" />
      <Description product={product} />
      <RelatedProducts />
    </div>
  );
};

export default ProductDetail;
