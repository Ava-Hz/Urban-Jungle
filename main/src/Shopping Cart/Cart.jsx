import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { FaXmark } from "react-icons/fa6";
import { useState, useEffect } from "react";
import axios from "axios";
import PerfectPlant from "../Shop page/PerfectPlant";
import Footer from "./Footer";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();
  const [coupons, setCoupons] = useState([]);
  const [couponInput, setCouponInput] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        "X-Parse-Application-Id": "fmQbd823w0wRcsTyLMVsrsGyZj0S68u9XvMrsrGl",

        "X-Parse-REST-API-Key": "Dir2JDEQAunDUhqTaFIzlsm9G4fw0l47HpCcAyo9",
      },
    };
    axios
      .get("https://parseapi.back4app.com/classes/coupon", config)
      .then((response) => setCoupons(response.data.results));
  }, []);

  const applyCoupon = () => {
    const found = coupons.find(
      (c) => c.code.toLowerCase() === couponInput.toLowerCase()
    );

    if (!found) {
      setDiscount(0);
      setCouponError("Invalid coupon code");
      return;
    }

    setCouponError("");
    setDiscount(found.discount);
  };

  const totalprice = cartItems.reduce(
    (sum, item) => sum + item.Cost * item.quantity,
    0
  );

  return (
    <div >
      <div className="p-10 h1font">
        <Link to="/">
          <button className="bg-[#6928] hover:bg-[#698927] text-white rounded p-2 mb-4">
            Back to Home
          </button>
        </Link>

        <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p>Your shopping bag is empty.</p>
        ) : (
          <div className="overflow-x-auto max-w-full">
            <table className="w-full min-w-[600xp] bg-white border-1 border-gray-300 text-center text-sm sm:text-base">
              <thead className="bg-gray-100">
                <tr className="text-gray-700">
                  <th className="py-2 px-4"></th>
                  <th className="py-2 px-4">Product</th>
                  <th className="py-2 px-4">Quantity</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Total</th>
                  <th className="py-2 px-4"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr key={item.objectId} className="border-1 border-gray-300">
                    <td className="py-2 px-4">
                      <img
                        src={item.Image?.url}
                        alt={item.plant_name}
                        className="w-16 h-16 object-cover mx-auto rounded"
                      />
                    </td>
                    <td className="py-2 px-4 text-green-500">
                      {item.plant_name}
                    </td>
                    <td className="py-2 px-4">{item.quantity}</td>
                    <td className="py-2 px-4">${item.Cost}</td>
                    <td className="py-2 px-4">
                      ${(item.Cost * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-2 px-4">
                      <button
                        onClick={() => removeFromCart(item.objectId)}
                        className="text-red-600 hover:underline cursor-pointer"
                      >
                        <FaXmark
                          color="Black"
                          className="border rounded-full"
                        />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="text-right mt-6 text-lg font-bold">
              Total: ${totalprice.toFixed(2)}
              {discount > 0 && (
                <div className="text-right text-green-600">
                  Discount Applied: {discount}% (-$
                  {((totalprice * discount) / 100).toFixed(2)})
                </div>
              )}
              <div className="mt-6 text-right">
                <input
                  type="text"
                  value={couponInput}
                  onChange={(e) => setCouponInput(e.target.value)}
                  placeholder="Enter coupon code"
                  className="border border-gray-300 px-2 py-1 w-[15%] rounded mr-2"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
                >
                  Apply
                </button>
                {couponError && (
                  <p className="text-red-600 text-sm mt-2">{couponError}</p>
                )}
              </div>
              <div className="text-right text-xl font-bold mt-2">
                Final Total: $
                {(totalprice - (totalprice * discount) / 100).toFixed(2)}
              </div>
            </div>

            <div className="text-right mt-4">
              <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
                Proceed to Checkout
              </button>
            </div>
          </div>
        )}
      </div>
      <PerfectPlant />
      <Footer />
    </div>
  );
};

export default Cart;
