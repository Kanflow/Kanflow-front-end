// @flow
import { REORDER_TODO, CREATE_TODO, TRANSITION_TODO } from "./actionTypes";

const initialState = {
  todos: [
    {
      ID: 1,
      name: "cat",
      description: "This is a cat",
      status_ID: 0,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 2,
      name: "dog",
      description: "This is a dog",
      status_ID: 0,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 3,
      name: "frog",
      description: "This is a frog",
      status_ID: 1,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    },
    {
      ID: 4,
      name: "rabbit",
      description: "This is a rabbit",
      status_ID: 1,
      completed: false,
      archived: false,
      created_timestamp: new Date()
    }
  ]
};

// TODO: Refactor me
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REORDER_TODO:
      const allTodos = [...state.todos];
      const filteredTodos = allTodos.filter(
        t => t.status_ID.toString() === action.status_ID.toString()
      );
      const remainingTodos = allTodos.filter(
        t => t.status_ID.toString() !== action.status_ID.toString()
      );
      const [removed] = filteredTodos.splice(action.sourceIndex, 1);
      filteredTodos.splice(action.destinationIndex, 0, removed);

      return { ...state, todos: remainingTodos.concat(filteredTodos) };

    case TRANSITION_TODO:
      const allTs = [...state.todos];

      const sourceTodos = allTs.filter(
        t => t.status_ID.toString() === action.sourceStatus_ID.toString()
      );
      const destinationTodos = allTs.filter(
        t => t.status_ID.toString() === action.destinationStatus_ID.toString()
      );
      const remainders = allTs.splice(0, null, [
        ...sourceTodos,
        ...destinationTodos
      ]);

      const [removedTodo] = sourceTodos.splice(action.sourceIndex, 1);
      removedTodo.status_ID = action.destinationStatus_ID;
      destinationTodos.splice(action.destinationIndex, 0, removedTodo);

      return {
        ...state,
        todos: remainders.concat(...sourceTodos, ...destinationTodos)
      };

    case CREATE_TODO:
      const todos = [...state.todos];
      const maxID = Math.max(...todos.map(t => t.ID));
      const newTodo = {
        ID: maxID + 1,
        name: action.name,
        description: "",
        status_ID: 0,
        completed: false,
        archived: false,
        created_timestamp: new Date()
      };
      return { ...state, todos: [...todos, newTodo] };

    default:
      return state;
  }
};

export default reducer;
