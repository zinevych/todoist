/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import {
  LOAD_TODO_ITEMS,
  LOAD_TODO_ITEMS_SUCCESS,
  LOAD_TODO_ITEMS_FAIL,
} from "./actionTypes";

export const fetchItems = () => (dispatch) => {
  dispatch({ type: LOAD_TODO_ITEMS });

  const url = "http://localhost:3000/todos";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("data", data);
      return dispatch({ type: LOAD_TODO_ITEMS_SUCCESS, payload: data });
    })
    .catch((err) => dispatch({ type: LOAD_TODO_ITEMS_FAIL, payload: err }));
};
