import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease } from "../redux/counter-redux";

const Counter = () => {
  ///스토어에 접근할 수 있게 해주는 것은 useSelecter()

  // const [count, setCount] = useState(0);
  const counter = useSelector((store) => store.counter);
  // const counter = useSelector((store) => console.log(store.counter));
  const dispatch = useDispatch();
  // const onIncrease = () => {
  //   setCount((prev) => prev + 1);
  // };

  // const onDecrease = () => {
  //   setCount((prev) => prev - 1);
  // };
  ///dispatch를 통해 상태를 업데이트할수있다.
  // dispatch인자에 리듀서에 전달할 액션객체를 넣어준다
  const onIncrease = () => {
    // dispatch({ type: "counter/INCREASE" });
    dispatch(increase());
  };

  console.log();

  return (
    <>
      <h1>Counter</h1>
      <h1>{counter.count}</h1>
      <button onClick={onIncrease}>+</button>
      {/* <button onClick={onDecrease}>-</button> */}
    </>
  );
};

export default Counter;
