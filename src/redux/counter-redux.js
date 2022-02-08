const INITIAL_STATE = { count: 0 };

///액션타입을 만들어준다.
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

//액션 create를 만들어주기

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// Reducer

const CartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default CartReducer;
