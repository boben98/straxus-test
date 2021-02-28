const pointReducer = (state = 0, action) => {
  switch (action.type) {
    case "ADD_POINT":
      return state + 1;
    case "RESET_POINTS":
      return 0;
    default:
      return state;
  }
};
export default pointReducer;
