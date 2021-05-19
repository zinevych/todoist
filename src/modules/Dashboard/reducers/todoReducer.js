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
    case "ADD_TODO_ITEM":
      return { ...state };
    default:
      return state;
  }
};

export default todoReducer;
