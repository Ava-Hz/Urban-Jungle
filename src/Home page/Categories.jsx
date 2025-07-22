import React, { useEffect, useState } from "react";
import "./../App.css";
import axios from "axios";


const Categories = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",
        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };
    axios
      .get("https://parseapi.back4app.com/classes/Trend_Product", config)
      .then((response) => setData(response.data.results));
  }, []);
  return (
    <div>
      <h1 className="text-center text-5xl h1font font-medium mt-20">
        Our Categories
      </h1>
      <div className="grid grid-cols-4 gap-4">
        {data.map((item) => {
          // console.log(item?.Image.url)
          if (item?.Cost == 0) {
            return (
              <div className="flex flex-col justify-center items-center mt-10">
                <img src={item?.Image.url} alt="" className="" loading="lazy" />

                <p className="text-xl pb-10">{item?.place}</p>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Categories;
