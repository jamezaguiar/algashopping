const initialState = 0;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUM':
      return action.payload[0] + action.payload[1];
    case 'SUBTRACT':
      return action.payload[0] - action.payload[1];
    default:
      return state;
  }
};

export default reducer;
