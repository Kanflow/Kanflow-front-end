import React, { Component } from "react";
import Status from "./Status";
import { DragDropContext } from "react-beautiful-dnd";

const todos = [
  { id: 1, name: "cat", description: "This is a cat" },
  { id: 2, name: "dog", description: "This is a dog" },
  { id: 3, name: "frog", description: "This is a cat" },
  { id: 4, name: "bear", description: "This is a bear" }
];

class App extends Component {
  // TODO: Implement me
  onDragEnd = result => {};

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Status
            id={1}
            name="Backlog"
            description="Dumping ground"
            todos={todos}
          />
        </DragDropContext>
      </div>
    );
  }
}

export default App;
