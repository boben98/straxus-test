const questionReducer = (state = { currentId: 0, list: [] }, action) => {
  switch (action.type) {
    case "ADD_QUESTION":
      action.payload.id = state.currentId;
      state.list.push(action.payload);
      return {
        currentId: state.currentId + 1,
        list: state.list,
      };
    case "DELETE_QUESTION":
      return {
        currentId: state.currentId,
        list: state.list.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};
export default questionReducer;
