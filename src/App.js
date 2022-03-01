import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Routing from "./routing";
import { createStore } from "redux";
import rootReducer from "./redux/index-redux";

///1. Provider를 감싸주면 그 안에서 상태관리가 가능하다.
/// 그리고 store을 props로 넘겨주는데 store는 createStore import해서 사용한다.
///2. createStore의 인자엔 **초기상태값**이 들어간다.
let store = createStore(() => {
  return [{ id: 0, name: "신발", quan: 2 }];
});
function App() {
  // const store = createStore(rootReducer);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Routing></Routing>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
