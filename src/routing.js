import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Basket from "./basket/basket";
import Counter from "./counter/counter";
import Home from "./home";
const Routing = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basket" element={<Basket />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </>
  );
};

export default Routing;
