import React, { Component } from "react";
import Status from "./Status";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";

const todos = [
  { id: 1, name: "cat", description: "This is a cat" },
  { id: 2, name: "dog", description: "This is a dog" },
  { id: 3, name: "frog", description: "This is a cat" },
  { id: 4, name: "bear", description: "This is a bear" }
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
const Board = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
const Title = styled.h1`
  font-family: Helvetica;
  font-weight: 500;
  font-size: 42px;
  color: #000000;
  align-self: center;
`;

class App extends Component {
  // TODO: Implement me
  onDragEnd = result => {};

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <Title> Kanflow </Title>
            <Board>
              <Status
                id={1}
                name="Backlog"
                description="Dumping ground"
                todos={todos}
              />
              <Status
                id={2}
                name="To Do"
                description="Prioritised list"
                todos={todos}
              />
            </Board>
          </Container>
        </DragDropContext>
      </div>
    );
  }
}

export default App;
