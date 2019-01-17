import "./ColourPicker.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../../../actions";
import ColourPickerButton from "./ColourPickerButton";

class ColourPicker extends Component {
  handleClick = event => {
    const { activeModeId } = this.props.canvasActiveId;
    activeModeId === "fillColour"
      ? this.props.setFillColour(event.target.id || "transparent")
      : this.props.setStrokeColour(event.target.id || "transparent");
    this.props.showPopup("off");
  };

  renderButtons() {
    const { activeModeId } = this.props.canvasActiveId;

    if (activeModeId === "strokeWidth") return;

    const { strokeColour, fillColour } = this.props,
      buttonColours = [
        { colour: "#ff0000" }, // Red
        { colour: "#ff6600" }, // Dark Orange
        { colour: "#ff9400" }, // Light Orange
        { colour: "#fec500" }, // Dark Yellow
        { colour: "#ffff00" }, // Bright Yellow
        { colour: "#3eef11" }, // Bright Green
        { colour: "#0fad00" }, // Dark Green
        { colour: "#00a3c7" }, // Light Blue
        { colour: "#0064b5" }, // Medium Blue
        { colour: "#0010a5" }, // Dark Blue
        { colour: "#6300a5" }, // Purple
        { colour: "#e61799" }, // Dark Pink
        { colour: "#ff6ec9" }, // Light Pink
        { colour: "#000" }, // Black
        { colour: "#fff", border: "1px solid #ddd" }, // White
        { colour: "transparent", icon: "ban" } // Transparent
      ],
      buttons = buttonColours.map((obj, index) => {
        const { colour, border, icon } = obj,
          fromPopup = activeModeId === "fillColour" ? fillColour : strokeColour,
          active = colour === fromPopup ? "colour-picker-button--active" : "";
        return (
          <ColourPickerButton
            key={index}
            id={colour}
            classes={`colour-picker-button ${active}`}
            colour={colour}
            border={border}
            icon={icon}
            onClick={this.handleClick}
          />
        );
      });

    return <div>{buttons}</div>;
  }

  render() {
    return <div>{this.renderButtons()}</div>;
  }
}

const mapStateToProps = ({
  canvasActiveId,
  showPopup,
  fillColour,
  strokeColour
}) => {
  return {
    canvasActiveId,
    showPopup,
    strokeColour,
    fillColour
  };
};

export default connect(
  mapStateToProps,
  actions
)(ColourPicker);
