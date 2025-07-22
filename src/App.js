import "./App.css";

import { Route, Routes, BrowserRouter } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import React, { Suspense, lazy } from "react";
import Loader from "./Loader"; 


const Home = lazy(() => import("./Home page/Home"));
const Shop = lazy(() => import("./Shop page/Shop"));
const ProductDetail = lazy(() => import("./Product Detail/ProductDetail"));
const Cart = lazy(() => import("./Shopping Cart/Cart"));
const About = lazy(() => import("./About/About"));
const Contact = lazy(() => import("./Contact/Contact"));

function App() {
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />

            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
