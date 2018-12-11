import React, { Component } from "react";
import Todo from "./Todo";

class App extends Component {
  render() {
    return (
      <div>
        <Todo name="cat" description="This is a cat" />
      </div>
    );
  }
}

export default App;
