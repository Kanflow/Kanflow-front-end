import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "../Todo";
import styled from "styled-components";
import { Droppable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 10px;
  padding: 5px;
  width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #999999;
`;
const Title = styled.h1`
  font-size: 24px;
  font-family: Helvetica;
  font-weight: 500;
  align-self: center;
`;
const Description = styled.h2`
  font-size: 16px;
  font-family: Helvetica;
  font-weight: 300;
`;

const TaskList = styled.div``;

function mapStateToProps(state) {
  return {};
}
type Props = {
  ID: number,
  name: string,
  description: string,
  todos: Object
};

class Status extends Component<Props> {
  render() {
    return (
      <Container>
        <Title> {this.props.name}</Title>
        <Description> {this.props.description} </Description>
        <Droppable droppableId={this.props.id}>
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
      </Container>
    );
  }
}

export default connect(mapStateToProps)(Status);
