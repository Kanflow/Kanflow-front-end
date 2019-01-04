// @flow
import { CREATE_STATUS } from "./actionTypes";

const initialState = {
  statuses: [
    {
      ID: 0,
      name: "Backlog",
      description: "Dumping Ground",
      nextStatusID: 1,
      previousStatusID: 0
    },
    {
      ID: 1,
      name: "Todo",
      description: "Prioritised list",
      nextStatus_ID: 2,
      previousStatusID: 0
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATUS:
      const statuses = [...state.statuses];
      const maxID = Math.max(...statuses.map(s => s.ID));
      const newStatus = {
        ID: maxID + 1,
        name: action.name,
        description: "",
        nextStatusID: maxID + 2,
        previousStatusID: maxID
      };
      return { ...state, statuses: [...statuses, newStatus] };
    default:
      return state;
  }
};

export default reducer;
