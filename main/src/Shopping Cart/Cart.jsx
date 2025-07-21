import React from "react";
import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  const totalprice = cartItems.reduce(
    (sum, item) => sum + item.Cost * item.quantity,
    0
  );

  return (
    <div className="">
      <Link to="/">
        <button className="bg-[#6928] hover:bg-[#698927] text-white rounded p-2 relative top-0 left-0 ">
          back to Home
        </button>
      </Link>
      <h1 className="text-3xl p-8"></h1>

      {cartItems.lengh == 0 ? (
        <p>Your Shopping bag is Empty.</p>
      ) : (
        <div className="space-y-6 px-20">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-1 border-gray-300 p-4 rounded"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.Image?.url}
                  alt={item.plant_name}
                  className="w-20 h-20 object-cover rounded"
                />
              </div>
              <div className="flex items-center space-x-4">
                <p className="font-semibold">{item.plant_name}</p>
                <p className="text-sm text-gray-500">{item.quantity}</p>
              </div>

              <div>
                <p>
                  ${item.Cost} x {item.quantity}
                </p>
                <p className="font-bold">${item.Cost * item.quantity}</p>
                
                  <button
                    onClick={() => removeFromCart(item.objectId)}
                    className="mt-2 text-red-600 text-sm hover:underline"
                  >
                  remove
                </button>
              </div>
            </div>
          ))}
          <hr />
          <div className="text-left text-lg font-bold">
            Total: {totalprice.toFixed(2)}
          </div>
          <div className="flex justiy-end">
            <button className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700">
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
