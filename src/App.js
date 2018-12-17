// @flow
import React, { Component } from "react";
import Status from "./Status";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect, dispatch } from "react-redux";
import { reorderTodo } from "./Todo/actions";

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
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.props.onDragEnd}>
          <Container>
            <Title> Kanflow </Title>
            <Board>
              {this.props.statuses.map((status, index) => (
                <Status
                  key={index}
                  id={status.ID.toString()}
                  name={status.name}
                  description={status.description}
                  todos={this.props.todos}
                />
              ))}
            </Board>
          </Container>
        </DragDropContext>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    statuses: state.statuses.statuses,
    todos: state.todos.todos
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // TODO: This doesn't deal with moving between states would need:
    // - startStatusID, endStatusID as well as the current args
    // - logic to re-order the destination and source statuses
    onDragEnd: result => {
      const statusID = result.destination.droppableId;
      dispatch(
        reorderTodo(statusID, result.source.index, result.destination.index)
      );
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
