import todos from "./Todo/reducers.js";
import statuses from "./Status/reducers.js";

import { combineReducers } from "redux";

const app = (state = null, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const reducers = combineReducers({
  todos,
  statuses,
  app
});

export default reducers;
