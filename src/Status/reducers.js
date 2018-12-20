const statusInitialState = {
  statuses: [
    { ID: 1, name: "Backlog", description: "Dumping Ground", todos: [] },
    { ID: 2, name: "Todo", description: "Prioritised list", todos: [] }
  ]
};

const reducer = (state = statusInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
