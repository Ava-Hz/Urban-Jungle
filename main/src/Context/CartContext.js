
import { createContext, useContext, useReducer } from "react";

const initialState = {
  items: [],
};
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find(
        (i) => i.objectId === action.payload.objectId
      );
      if (existing) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.objectId === action.payload.objectId
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      }
    }
    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.objectId !== action.payload),
      };
    case "CLEAR_CART":
      return { ...state, items: [] };

    default:
      return state;
  }
};
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (item, quantity = 1) => {
    if (quantity <= 0) return;
    dispatch({ type: "ADD_ITEM", payload: { ...item, quantity } });
  };

  const removeFromCart = (objectId) => {
    dispatch({ type: "REMOVE_ITEM", payload: objectId });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const totalQuantity = state.items.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems: state.items,
        addToCart,
        removeFromCart,
        clearCart,
        totalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
