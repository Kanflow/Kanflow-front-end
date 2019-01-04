import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "../Todo";
import CreateTodo from "../CreateTodo";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 10px;
  padding: 5px;
  width: 220px;
  display: flex;
  flex-direction: column;
  border: 1px solid #999999;
`;
const Title = styled.h1`
  font-size: 24px;
  font-family: Helvetica;
  align-self: center;
  font-weight: 100;
  margin: 20px 5px 5px 5px;
`;
const Description = styled.h2`
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 100;
  align-self: center;
  margin: 5px 0px 20px 0px;
`;

const TaskList = styled.div``;

type Props = {
  id: number,
  name: string,
  description: string
};

class Status extends Component<Props> {
  render() {
    return (
      <Container>
        <Title> {this.props.name}</Title>
        <Description> {this.props.description} </Description>
        <Droppable droppableId={this.props.id} type="TODO">
          {provided => (
            <TaskList ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.todos
                .filter(
                  t => t.status_ID.toString() === this.props.id.toString()
                )
                .map((t, index) => (
                  <Todo
                    key={index}
                    index={index}
                    id={t.ID}
                    name={t.name}
                    description={t.description}
                  />
                ))}
              {provided.placeholder}
            </TaskList>
          )}
        </Droppable>
        {this.props.id === "0" ? <CreateTodo /> : null}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    todos: state.todos.todos
  };
};

export default connect(mapStateToProps)(Status);
