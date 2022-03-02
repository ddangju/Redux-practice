///redux에서는 state 데이터의 수정방법을 미리 정의한다.
//수량 데이터를 수정하는 함수 (reducer)
let shoesState = [
  { id: 0, name: "신발", quan: 2 },
  { id: 1, name: "신발2", quan: 3 },
];

let alertState = true;
function ProductReducer2(state = alertState, action) {
  return state;
}

function ProductReducer(state = shoesState, action) {
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

// export default ProductReducer;
export { ProductReducer, ProductReducer2 };
