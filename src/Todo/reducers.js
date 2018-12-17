// @flow

import { REORDER_TODO } from "./actionTypes";

const initialTodoState = {
  todos: [
    {
      ID: 1,
      name: "cat",
      description: "This is a cat",
      status_ID: 1,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 2,
      name: "dog",
      description: "This is a dog",
      status_ID: 1,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 3,
      name: "frog",
      description: "This is a frog",
      status_ID: 2,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 4,
      name: "rabbit",
      description: "This is a rabbit",
      status_ID: 2,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    }
  ]
};

// TODO: Refactor me
const reducer = (state = initialTodoState, action) => {
  switch (action.type) {
    case REORDER_TODO:
      const allTodos = [...state.todos];
      const filteredTodos = allTodos.filter(
        t => t.status_ID.toString() === action.statusID.toString()
      );
      const remainingTodos = allTodos.filter(
        t => t.status_ID.toString() !== action.statusID.toString()
      );
      const [removed] = filteredTodos.splice(action.startIndex, 1);
      filteredTodos.splice(action.endIndex, 0, removed);

      return { ...state, todos: remainingTodos.concat(filteredTodos) };
    default:
      return state;
  }
};

export default reducer;
