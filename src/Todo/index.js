import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { Draggable } from "react-beautiful-dnd";
import {
  InlineEditStateless,
  SingleLineTextInput
} from "@atlaskit/inline-edit";

import { changeTodoName } from "../Todo/actions";

const Container = styled.div`
  margin: 5px;
  padding: 5px 16px;
  display: flex;
  flex-direction: column;
  background-color: white;
  border: 1px solid #999999;
`;
const Description = styled.h2`
  font-size: 12px;
  font-family: Helvetica;
  font-weight: 100;
`;

type Props = {
  ID: number,
  name: string,
  description: string
};

class Todo extends Component<Props> {
  state = {
    isEditingName: false,
    name: ""
  };

  onEditRequestedName = () => {
    this.setState({
      isEditingName: true
    });
  };

  onConfirmName = () => {
    this.setState({
      isEditingName: false,
      name: ""
    });
    this.props.onConfirmName(this.props.id, this.state.name);
  };

  onCancelName = () => {
    this.setState({
      isEditingName: false
    });
  };

  onChangeName = (event: any) => {
    this.setState({
      name: event.target.value
    });
  };

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
            <InlineEditStateless
              isEditing={this.state.isEditingName}
              onEditRequested={this.onEditRequestedName}
              onCancel={this.onCancelName}
              onConfirm={this.onConfirmName}
              isConfirmOnBlurDisabled={true}
              shouldConfirmOnEnter={true}
              readView={
                <SingleLineTextInput
                  isEditing={false}
                  value={this.props.name}
                />
              }
              editView={
                <SingleLineTextInput
                  isEditing
                  isInitiallySelected={true}
                  value={this.state.name}
                  onChange={this.onChangeName}
                />
              }
            />
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

const mapDispatchToProps = dispatch => {
  return {
    onConfirmName: (id, name) => {
      dispatch(changeTodoName(id, name));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Todo);
