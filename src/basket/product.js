import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Product = () => {
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  const goBasket = () => {
    navigate("/basket");
  };

  const handleClick = () => {
    setPrice((prev) => prev + 1);
  };
  return (
    <>
      <h1>상품</h1>
      <img src="https://codingapple1.github.io/shop/shoes2.jpg" alt="shoes" />
      <div>
        <button onClick={handleClick}>+</button>
        <button>-</button>
      </div>
      <h2>{price}</h2>
      <button onClick={goBasket}>카트바로가기</button>
    </>
  );
};

function state를props화(state) {
  return {
    state: state,
  };
}

export default Product;
