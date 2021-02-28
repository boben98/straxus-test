const nameReducer = (state = "", action) => {
  switch (action.type) {
    case "ADD_NAME":
      return action.payload;
    default:
      return state;
  }
};

export default nameReducer;
