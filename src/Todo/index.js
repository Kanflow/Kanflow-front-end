import React, { PureComponent } from "react";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {};
}

type Props = {
  name: string,
  description: string
};
class Todo extends PureComponent<Props> {
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <p> {this.props.description} </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Todo);
