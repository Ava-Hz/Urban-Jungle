import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Link as scrollLink } from "react-scroll";

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
        const selected = shuffled.slice(0, 3);

        setRandomItems(selected);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="mx-10 text-5xl h1font font-medium">Related Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-10 my-10 w-[50%]">
        {randomItems.map((item) => (
          <div key={item.objectId} className=" p-4 rounded shadow">
            <Link
              to={`/product/${item.objectId}`}
              key={item.objectId}
              state={{ product: item }}
              className="cursor-pointer block"
            >
              <img
                src={item.Image?.url}
                alt={item.plant_name}
                className=" h-auto object-cover rounded mb-2"
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
