import React from "react";
import PropTypes from "prop-types";

import ColourPickerButton from "./ColourPickerButton/ColourPickerButton";

import "./ColourPicker.scss";

const ColourPicker = ({
  activeModeId,
  handleColourPickerClick,
  setFillColour,
  setStrokeColour,
  setPopupData,
  strokeColour,
  fillColour
}) => {
  const renderButtons = () => {
    if (activeModeId === "strokeWidth") return <></>;

    const buttonColours = [
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
    ];

    const buttons = buttonColours.map((button, index) => {
      const { colour, border, icon } = button;
      const fillColourActive =
        activeModeId === "fillColour" ? fillColour : strokeColour;
      const isActive =
        colour === fillColourActive ? "colour-picker-button--active" : "";

      return (
        <ColourPickerButton
          key={index}
          id={colour}
          classes={`colour-picker-button ${isActive}`}
          colour={colour}
          border={border}
          icon={icon}
          handleColourPickerClick={handleColourPickerClick}
        />
      );
    });

    return <div>{buttons}</div>;
  };

  return <div data-test="component-colour-picker">{renderButtons()}</div>;
};

ColourPicker.propTypes = {
  activeModeId: PropTypes.string.isRequired,
  handleColourPickerClick: PropTypes.func.isRequired,
  setFillColour: PropTypes.func.isRequired,
  setStrokeColour: PropTypes.func.isRequired,
  setPopupData: PropTypes.func.isRequired,
  strokeColour: PropTypes.string,
  fillColour: PropTypes.string
};

ColourPicker.defaultProps = {
  strokeColour: "#ff0000",
  fillColour: "transparent"
};

export default ColourPicker;
