import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Product = (props) => {
  const [price, setPrice] = useState(0);
  let navigate = useNavigate();

  const goBasket = () => {
    navigate("/basket");
  };

  const handleClick = (e) => {
    ///클릭해서 들어온 버튼의 수량을 플러스
    console.log(e);
    setPrice((prev) => prev + 1);
  };
  return (
    <>
      <h1>상품</h1>
      {props.state.map((item, idx) => {
        return (
          <div key={idx}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
              alt="shoes"
            />
            <div>
              {/* <button className={`button${idx + 1}`} onClick={handleClick}>
                +
              </button> */}
              <button
                onClick={() => {
                  props.dispatch({
                    type: { increment: "increment", id: item.id },
                  });
                }}
              >
                +
              </button>
              <button
                onClick={() => {
                  props.dispatch({ type: "decrement" });
                }}
              >
                -
              </button>
            </div>
            <h1>{item.name}</h1>
            <h2>{item.quan}</h2>
            <button onClick={goBasket}>카트바로가기</button>
          </div>
        );
      })}
    </>
  );
};

////넘어온 store를 props로 변환해주는 함수이다.
//object를 리턴한다.

function state를props화(state) {
  // console.log(state, "<<<State");

  return {
    state: state,
  };
}
export default connect(state를props화)(Product);

// export default Product;
