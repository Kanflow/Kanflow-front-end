import todoReducer from "./Todo/reducers.js";

import { combineReducers } from "redux";

const reducer = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  todoReducer,
  reducer
});

export default reducers;
