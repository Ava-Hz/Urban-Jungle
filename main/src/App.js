import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import React, { Suspense, lazy } from "react";

const Home = lazy(() => import("./Home page/Home"));
const Shop = lazy(() => import("./Shop page/Shop"));
const ProductDetail = lazy(() => import("./Product Detail/ProductDetail"));
const Cart = lazy(() => import("./Shopping Cart/Cart"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />

          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element = {<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
