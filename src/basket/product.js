import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Product = (props) => {
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
      <h2>{props.state[0].quan}</h2>
      <button onClick={goBasket}>카트바로가기</button>
    </>
  );
};

////넘어온 store를 props로 변환해주는 함수이다.
//object를 리턴한다.

function state를props화(state) {
  console.log(state, "<<<State");

  return {
    state: state,
  };
}
export default connect(state를props화)(Product);

// export default Product;
