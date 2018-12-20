import React, { PureComponent } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";

const Container = styled.div`
  margin: 2px;
  padding: 5px;
  width: 180px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #999999;
`;
const Title = styled.h1`
  font-size: 14px;
  font-family: Helvetica;
  font-weight: 500;
`;
const Description = styled.h2`
  font-size: 12px;
  font-family: Helvetica;
  font-weight: 300;
`;

type Props = {
  ID: number,
  name: string,
  description: string
};

class Todo extends PureComponent<Props> {
  render() {
    return (
      <Draggable
        draggableId={this.props.id}
        index={this.props.index}
        type="TODO"
      >
        {provided => (
          <Container
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Title>{this.props.name}</Title>
            <Description> {this.props.description} </Description>
          </Container>
        )}
      </Draggable>
    );
  }
}
const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps)(Todo);
