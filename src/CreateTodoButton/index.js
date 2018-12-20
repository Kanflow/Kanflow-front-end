// @flow

import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  InlineEditStateless,
  SingleLineTextInput
} from "@atlaskit/inline-edit";
import { createTodo } from "../Todo/actions";

const Container = styled.div`
  margin: 5px;
`;

function mapStateToProps(state) {
  return {};
}

class CreateTodoButton extends Component {
  state = {
    value: "",
    isEditing: false
  };

  onEditRequested = () => {
    this.setState({
      isEditing: true
    });
  };
  onConfirm = () => {
    this.props.onConfirm(this.state.value);
    this.setState({
      isEditing: false,
      value: ""
    });
  };

  onCancel = () => {
    this.setState({
      isEditing: false,
      value: ""
    });
  };
  onChange = (event: any) => {
    this.setState({
      value: event.target.value
    });
  };

  render() {
    return (
      <Container>
        <InlineEditStateless
          label="Create Todo"
          isEditing={this.state.isEditing}
          onEditRequested={this.onEditRequested}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          isConfirmOnBlurDisabled={true}
          shouldConfirmOnEnter={true}
          readView={
            <SingleLineTextInput
              isEditing={false}
              value={this.state.value || "Enter a name for this task"}
            />
          }
          editView={
            <SingleLineTextInput
              isEditing
              isInitiallySelected
              value={this.state.value}
              onChange={this.onChange}
            />
          }
        />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    onConfirm: result => {
      dispatch(createTodo(result));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateTodoButton);
