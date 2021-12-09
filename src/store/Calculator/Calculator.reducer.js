import { SUM, SUBTRACT } from './Calculator.actionTypes';

const initialState = { result: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUM:
      return {
        ...state,
        result: action.payload[0] + action.payload[1],
      };
    case SUBTRACT:
      return {
        ...state,
        result: action.payload[0] - action.payload[1],
      };
    default:
      return state;
  }
};

export default reducer;
