import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routing from "./routing";
import { createStore } from "redux";
import rootReducer from "./redux/index-redux";

///redux에서는 state 데이터의 수정방법을 미리 정의한다.
//수량 데이터를 수정하는 함수 (reducer)
let shoesState = [
  { id: 0, name: "신발", quan: 2 },
  { id: 1, name: "신발2", quan: 3 },
];

function reducer(state = shoesState, action) {
  console.log(action.type.increment, "<<<<");
  if (action.type.increment === "increment") {
    ///일단 state복사
    let copy = [...state];
    copy[action.type.id].quan++;
    return copy;
  } else if ((action.type = "decrement")) {
    let copy = [...state];
    if (copy[0].quan <= 0) {
      return copy;
    } else {
      copy[0].quan--;
    }
    return copy;
  }
  // switch (action.type) {
  //   case Increment.increment:
  //     console.log(action.type);
  //     console.log(action, "<<");
  //   // case type.increment:
  //   //   let copy = [...state];
  //   //   copy[action.type.id].quan++;
  //   //   return { copy };
  //   default:
  //     return state;
  // }
}

///1. Provider를 감싸주면 그 안에서 상태관리가 가능하다.
/// 그리고 store을 props로 넘겨주는데 store는 createStore import해서 사용한다.
///2. createStore의 인자엔 **초기상태값**이 들어간다.

let store = createStore(reducer);

function App() {
  // const store = createStore(rootReducer);

  return (
    <BrowserRouter>
      <div className="App">
        <Provider store={store}>
          <Routing></Routing>
        </Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
