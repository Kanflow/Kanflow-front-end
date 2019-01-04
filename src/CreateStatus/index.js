import React, { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import {
  InlineEditStateless,
  SingleLineTextInput
} from "@atlaskit/inline-edit";
import { createStatus } from "../Status/actions";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px dashed #ccc;
  width: 200px;
  margin: 10px 5px;
  padding: 10px 16px;
`;

const Title = styled.h1`
  font-size: 16px;
  font-family: Helvetica;
  align-self: center;
  font-weight: 100;
  margin: 20px 5px 5px 5px;
`;

function mapStateToProps(state) {
  return {};
}

class CreateStatus extends Component {
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
        <Title> Create a new status </Title>
        <InlineEditStateless
          isEditing={this.state.isEditing}
          onEditRequested={this.onEditRequested}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
          isConfirmOnBlurDisabled={true}
          shouldConfirmOnEnter={true}
          readView={
            <SingleLineTextInput
              isEditing={false}
              value={this.state.value || "Enter a name for this status"}
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
    onConfirm: name => {
      dispatch(createStatus(name));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateStatus);
