export const addName = (name) => {
  return {
    type: "ADD_NAME",
    payload: name,
  };
};

export const addQuestion = (question) => {
  return {
    type: "ADD_QUESTION",
    payload: question,
  };
};

export const deleteQuestion = (id) => {
  return {
    type: "DELETE_QUESTION",
    payload: id,
  };
};

export const addPoint = () => {
  return {
    type: "ADD_POINT",
  };
};

export const resetPoints = () => {
  return {
    type: "RESET_POINTS",
  };
};
