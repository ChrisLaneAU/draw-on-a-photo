import React from "react";
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

export default ColourPickerButton;
