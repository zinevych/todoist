/* eslint-disable no-case-declarations */
import {
  ADD_TODO_ITEM,
  REMOVE_TODO_ITEM,
  LOAD_TODO_ITEMS_SUCCESS,
} from "../actions/actionTypes";

const initialState = [];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO_ITEM:
      return [
        ...state,
        {
          id: state.length + 1,
          title: action.payload.title,
          description: action.payload.desc,
          type: action.payload.type,
        },
      ];
    case LOAD_TODO_ITEMS_SUCCESS:
      return [].concat(action.payload);
    case REMOVE_TODO_ITEM:
      const newState = [...state];
      newState.splice(
        state.findIndex((item) => item.id === action.payload.id),
        1
      );
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
