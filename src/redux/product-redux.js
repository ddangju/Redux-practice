///redux에서는 state 데이터의 수정방법을 미리 정의한다.
//수량 데이터를 수정하는 함수 (reducer)
let shoesState = [
  { id: 0, name: "신발", quan: 1 },
  { id: 1, name: "신발2", quan: 1 },
];

let 장바구니 = [];

function ProductReducer2(state = 장바구니, action) {
  return state;
}

function ProductReducer(state = shoesState, action) {
  if (action.type === "increment") {
    ///일단 state복사
    let copy = [...state];
    if (copy) copy[action.payload.id].quan++;
    return copy;
  } else if (action.type === "decrement") {
    let copy = [...state];
    if (copy[action.payload.id].quan <= 0) {
      return copy;
    } else {
      copy[action.payload.id].quan--;
    }
    return copy;
  }
  return state;
}

// export default ProductReducer;
export { ProductReducer, ProductReducer2 };
