import React from "react";
import { Route, Routes } from "react-router-dom";
import Basket from "./basket/basket";
import Product from "./basket/product";
import Counter from "./counter/counter";
import Home from "./home";
const Routing = () => {
  return (
    <>
      {/* <Link to="/">Home</Link> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/basket" element={<Basket />} />
      </Routes>
    </>
  );
};

export default Routing;
