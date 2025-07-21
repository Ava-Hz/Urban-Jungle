import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { GiShoppingBag } from "react-icons/gi";
const Sorting = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");

    const [hoveredItemId, setHoveredItemId] = useState(null); 
    const { addToCart } = useCart();

  useEffect(() => {
    const config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",
        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };

    axios
      .get("https://parseapi.back4app.com/classes/Trend_Product", config)
      .then((response) => setProducts(response.data.results));
  }, []);

  const getSortedProducts = () => {
    const sorted = products.filter((item) => item.Cost > 0); //this line is for if we have a product equal to 0 and it's a mistake or needed to be 0
    switch (filter) {
      case "latest":
        return sorted.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
      case "price":
        return sorted.sort((a, b) => (a.Cost || 0) - (b.Cost || 0));
      case "all":
      default:
        return sorted;
    }
  };

  return (
    <div className="p-6">
      <div className=" flex justify-end">
        <label htmlFor="sort" className="mt-5 mr-5 font-bold text-gray-500 ">
          Sorted by:
        </label>

        <select
          id="sort"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border text-gray-500 rounded px-5 py-3"
        >
          <option value="all">All</option>
          <option value="latest">Latest</option>
          <option value="price">Price</option>
        </select>
      </div>

      {/* Display Sorted Products */}
      <div className="grid grid-col md:grid-cols-3 gap-3">
        {getSortedProducts().map((item) => (
          <Link
            to={`/product/${item.objectId}`}
            key={item.objectId}
            state={{ product: item }}
            className="cursor-pointer block"
          >
            <div
              key={item.objectId}
              className="relative p-4 rounded hover:shadow-sm text-center flex flex-col justify-center items-center"
              onMouseEnter={() => setHoveredItemId(item.objectId)}
              onMouseLeave={() => setHoveredItemId(null)}
            >
              <img
                src={item.Image?.url}
                alt={item.plant_name}
                className="object-cover w-full"
              />
              <h2 className="font-semibold text-lg">{item.plant_name}</h2>
              <p className="text-gray-600">{item.place}</p>
              <p className="font-bold text-green-700">${item.Cost}.00</p>
                              {hoveredItemId === item.objectId && (
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    e.preventDefault();
                                    addToCart(item, 1)}}
                                  className="absolute top-2 right-2 bg-black text-white p-2 rounded-full"
                                >
                                  <GiShoppingBag />
                                </button>
                              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sorting;
