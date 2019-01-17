import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ColourPickerButton = ({ classes, colour, border, onClick, id, icon }) => {
  return (
    <button
      className={classes}
      style={{ backgroundColor: colour, border: border }}
      onClick={onClick}
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
