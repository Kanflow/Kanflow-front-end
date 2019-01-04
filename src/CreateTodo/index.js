import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  InlineEditStateless,
  SingleLineTextInput
} from "@atlaskit/inline-edit";
import { createTodo } from "../Todo/actions";

const Container = styled.div`
  margin: 10px 5px;
  padding: 5px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px dashed #ccc;
`;
const Title = styled.h1`
  font-size: 14px;
  font-family: Helvetica;
  align-self: center;
  font-weight: 100;
  margin: 10px 5px 5px 5px;
`;

function mapStateToProps(state) {
  return {};
}

class CreateTodo extends Component {
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
    this.setState({
      isEditing: false,
      value: ""
    });
    this.props.onConfirm(this.state.value);
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
        <Title> Create Todo </Title>
        <InlineEditStateless
          isEditing={this.state.isEditing}
          onEditRequested={this.onEditRequested}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          isConfirmOnBlurDisabled={true}
          shouldConfirmOnEnter={true}
          isFitContainerWidthReadView={true}
          readView={
            <SingleLineTextInput
              isEditing={false}
              value={this.state.value || "Enter a name for this task"}
            />
          }
          editView={
            <SingleLineTextInput
              isEditing
              isInitiallySelected={true}
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
)(CreateTodo);
