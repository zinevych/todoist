import { combineReducers } from "redux";

import todoReducer from "./modules/Dashboard/reducers/todoReducer";

const rootReducer = combineReducers({
  todoItems: todoReducer,
});

export default rootReducer;
