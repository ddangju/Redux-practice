import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Basket from "./basket/basket";
import Counter from "./counter/counter";

const Home = () => {
  return (
    <>
      <Link to="basket">장바구니</Link>
      <Link to="counter">counter</Link>
    </>
  );
};

export default Home;
