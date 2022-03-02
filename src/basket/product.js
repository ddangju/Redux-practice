import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { connect } from "react-redux";

const Product = () => {
  // const [price, setPrice] = useState(0);
  let navigate = useNavigate();
  const product = useSelector((store) => store.ProductReducer);
  // const product2 = useSelector((store) => store.ProductReducer2);

  // const product2 = useSelector((store) => store.product.ProductReducer2);
  const dispatch = useDispatch();

  const goBasket = () => {
    navigate("/basket");
  };

  return (
    <>
      <h1>상품</h1>
      {product.map((item, idx) => {
        return (
          <div key={idx}>
            <img
              src={`https://codingapple1.github.io/shop/shoes${idx + 1}.jpg`}
              alt="shoes"
            />
            <div>
              <button
                onClick={() => {
                  dispatch({
                    type: "increment",
                    payload: { id: item.id },
                  });
                }}
              >
                +
              </button>

              <button
                onClick={() => {
                  dispatch({ type: "decrement", payload: { id: item.id } });
                }}
              >
                -
              </button>
            </div>
            <h1>{item.name}</h1>
            <h2>{item.quan}</h2>
            <button onClick={goBasket}>장바구니 바로가기</button>
          </div>
        );
      })}
    </>
  );
};

////넘어온 store를 props로 변환해주는 함수이다.
//object를 리턴한다.
//// 이 함수 대신에 사용할 수 있는 메서드는 useSelector()

// function state를props화(state) {
//   // console.log(state, "<<<State");

//   return {
//     state: state,
//   };
// }
// export default connect(state를props화)(Product);

export default Product;
