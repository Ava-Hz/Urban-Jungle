import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RandomProducts = () => {
  const [randomItems, setRandomItems] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",
        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };

    axios
      .get("https://parseapi.back4app.com/classes/Trend_Product", config)
      .then((response) => {
        const allProducts = response.data.results;
        const validProducts = allProducts.filter((item) => item.Cost !== 0);
        const shuffled = [...validProducts].sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3); // فقط سه تا محصول

        setRandomItems(selected);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="mx-5 md:mx-10">
      <h1 className="text-3xl md:text-5xl h1font font-medium mb-6">
        Related Products
      </h1>

      {/* دسکتاپ: سه‌ستونه */}
      <div className="hidden md:grid grid-cols-3 gap-4">
        {randomItems.map((item) => (
          <div key={item.objectId} className="p-4 rounded shadow bg-white">
            <Link
              to={`/product/${item.objectId}`}
              state={{ product: item }}
              className="cursor-pointer block"
            >
              <img
                src={item.Image?.url}
                alt={item.plant_name}
                className="h-48 w-full object-cover rounded mb-2"
                loading="lazy"
              />
              <h3 className="text-lg font-bold">{item.plant_name}</h3>
              <p className="text-gray-600">${item.Cost}</p>
            </Link>
          </div>
        ))}
      </div>

      {/* موبایل: اسکرول افقی */}
      <div className="md:hidden flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 pb-4">
        {randomItems.map((item) => (
          <div
            key={item.objectId}
            className="min-w-[80%] snap-start flex-shrink-0 bg-white p-4 rounded shadow"
          >
            <Link
              to={`/product/${item.objectId}`}
              state={{ product: item }}
              className="cursor-pointer block"
            >
              <img
                src={item.Image?.url}
                alt={item.plant_name}
                className="h-48 w-full object-cover rounded mb-2"
                loading="lazy"
              />
              <h3 className="text-lg font-bold">{item.plant_name}</h3>
              <p className="text-gray-600">${item.Cost}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProducts;
