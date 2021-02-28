import nameReducer from "./name";
import pointReducer from "./point";
import questionReducer from "./questions";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  name: nameReducer,
  points: pointReducer,
  questions: questionReducer,
});

export default rootReducer;
