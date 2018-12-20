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
      nextStatusID: 0,
      previousStatusID: 2
    }
  ]
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
