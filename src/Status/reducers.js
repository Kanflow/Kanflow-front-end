const statusInitialState = {
  statuses: [
    { id: 1, name: "Backlog", description: "Dumping Ground" },
    { id: 2, name: "Todo", description: "Prioritised list" }
  ]
};

const reducer = (state = statusInitialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
