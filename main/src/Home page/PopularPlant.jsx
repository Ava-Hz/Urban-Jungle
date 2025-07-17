import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const PopularPlant = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    let config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",
        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };
    axios
      .get("https://parseapi.back4app.com/classes/Trend_Product", config)
      .then((respose) => setData(respose.data.results));
  }, []);
  return (
    <div>
      {" "}
      <h1 className="text-center text-5xl h1font font-medium mt-20">
        Popular Products
      </h1>
      <div className="grid md:grid-cols-3 gap-3 px-10 mt-15">
        {data.map((item) => {
          if (item?.IsPopular) {
            return (
              <div className="flex flex-col justify-center items-center">
                <div className="p-5 ">
                  <img src={item?.Image.url} alt="" />
                  <p className="text-xl h1font">{item.plant_name}</p>
                  <p className="text-gray-400 text-sm">{item.place}</p>
                  <p className="text-bold">${item.Cost}.00</p>
                </div>
              </div>
            );
          } else {
            console.log("Bye");
          }
        })}
      </div>
      <hr className=" mx-10 mb-20 border-gray-300 my-10" />
    </div>
  );
};

export default PopularPlant;
