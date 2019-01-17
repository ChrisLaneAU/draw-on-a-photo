import "./StrokePicker.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../actions";

class StrokePicker extends Component {
  handleClick = event => {
    this.props.setStrokeWidth(event.target.id);
    this.props.showPopup("off");
  };

  render() {
    const { activeModeId } = this.props.canvasActiveId;
    const { strokeWidth } = this.props;
    if (activeModeId !== "strokeWidth") return false;

    const buttons = [];
    for (let i = 1; i < 11; i++) {
      const active = i === strokeWidth ? "stroke-picker__item--active" : "";
      const classes = `stroke-picker__item ${active}`;
      buttons.push(
        <li id={i} key={i} className={classes} onClick={this.handleClick}>
          {i}
        </li>
      );
    }

    return <ul className="stroke-picker__list">{buttons}</ul>;
  }
}

const mapStateToProps = ({ canvasActiveId, strokeWidth }) => {
  return {
    canvasActiveId,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  actions
)(StrokePicker);
