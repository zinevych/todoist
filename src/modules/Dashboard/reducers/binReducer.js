/* eslint-disable no-case-declarations */
import { removeTodoItem } from "../actions/actionTypes";

const initialState = [];

const binReducer = (state = initialState, action) => {
  switch (action.type) {
    case removeTodoItem:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          description: action.payload.desc,
          type: action.payload.type,
        },
      ];
    default:
      return state;
  }
};

export default binReducer;
