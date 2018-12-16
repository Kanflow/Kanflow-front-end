const initialTodoState = {
  todos: [
    { id: 1, name: "cat", description: "This is a cat" },
    { id: 2, name: "dog", description: "This is a dog" },
    { id: 3, name: "frog", description: "This is a frog" },
    { id: 4, name: "bear", description: "This is a bear" }
  ]
};

const reducer = (state = initialTodoState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
