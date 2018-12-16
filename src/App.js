// @flow
import React, { Component } from "react";
import Status from "./Status";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import { connect } from "react-redux";

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

const reorder = (list: any, startIndex: number, endIndex: number) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: this.props.todos
    };
  }

  onDragEnd = result => {
    const items = reorder(
      this.props.todos,
      result.source.index,
      result.destination.index
    );
    this.setState({
      todos: items
    });
  };

  render() {
    return (
      <div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          <Container>
            <Title> Kanflow </Title>
            <Board>
              {this.props.statuses.map((status, index) => (
                <Status
                  key={index}
                  id={index}
                  name={status.name}
                  description={status.description}
                  todos={this.state.todos}
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
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
