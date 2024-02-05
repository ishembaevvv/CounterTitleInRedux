import { DECREASE_COUNT, INCREASE_COUNT, RESET_COUNT } from "../actions";

const initState = {
  count: 0,
};

export const rootReducers = (state = initState, action) => {
  switch (action.type) {
    case INCREASE_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREASE_COUNT:
      return { ...state, count: state.count - 1 };
    case RESET_COUNT:
      return { ...state, count: 0 };
    default:
      return state;
  }
};
