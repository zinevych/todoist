import { combineReducers } from "redux";

import todoReducer from "./modules/Dashboard/reducers/todoReducer";
import binReducer from "./modules/Dashboard/reducers/binReducer";

const rootReducer = combineReducers({
  todoItems: todoReducer,
  binItems: binReducer,
});

export default rootReducer;
