import "./Button.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

export class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.onClick} className={this.props.className}>
        {this.props.text}
      </button>
    );
  }
}

const mapStateToProps = ({ data }) => {
  return data;
};

export default connect(mapStateToProps)(Button);
