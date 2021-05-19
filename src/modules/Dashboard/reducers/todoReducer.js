import { addTodoItem } from "../actions/actionTypes";

const initialState = [
  {
    id: 1,
    title: "title1",
    description: "description1",
    type: "personal",
  },
  {
    id: 2,
    title: "title2",
    description: "description2",
    type: "work",
  },
  {
    id: 3,
    title: "title3",
    description: "description3",
    type: "study",
  },
];

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case addTodoItem:
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

export default todoReducer;
