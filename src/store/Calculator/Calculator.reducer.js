const initialState = { result: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUM':
      return {
        ...state,
        result: Number(action.payload[0]) + Number(action.payload[1]),
      };
    case 'SUBTRACT':
      return {
        ...state,
        result: Number(action.payload[0]) - Number(action.payload[1]),
      };
    default:
      return state;
  }
};

export default reducer;
