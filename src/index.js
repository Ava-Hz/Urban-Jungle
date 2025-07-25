import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from "./Context/CartContext";

import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);

