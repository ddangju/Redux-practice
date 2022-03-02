//각 슬라이스 된 리듀서들을 하나의 객체로 관리하는 폴더
//하나로 객체로 합쳐주기위해 combineReducers()을 redux에서 불러온다

import { combineReducers } from "redux";
import counter from "./counter-redux";
import { ProductReducer, ProductReducer2 } from "./product-redux";

const rootReducer = combineReducers({
  counter: counter,
  ProductReducer: ProductReducer,
  ProductReducer2: ProductReducer2,
  // product: product,
  // product2: product2,
});

export default rootReducer;
