import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColourPickerButton = ({
  classes,
  colour,
  border,
  handleColourPickerClick,
  id,
  icon
}) => {
  return (
    <button
      data-test="component-colour-picker-button"
      className={classes}
      style={{ backgroundColor: colour, border: border }}
      onClick={event => handleColourPickerClick(event.target.id)}
      id={id}
    >
      {icon ? (
        <FontAwesomeIcon
          className="colour-picker-icon"
          style={{ width: "2em" }}
          icon={icon}
        />
      ) : (
        ""
      )}
    </button>
  );
};

ColourPickerButton.propTypes = {
  classes: PropTypes.string.isRequired,
  handleColourPickerClick: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  colour: PropTypes.string,
  border: PropTypes.string,
  icon: PropTypes.string
};

ColourPickerButton.defaultProps = {
  colour: "#ddd",
  border: "",
  icon: ""
};

export default ColourPickerButton;
