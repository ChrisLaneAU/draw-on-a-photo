import React from "react";
import PropTypes from "prop-types";

import "./StrokePicker.scss";

const StrokePicker = ({
  activeModeId,
  strokeWidth,
  handleStrokePickerClick
}) => {
  if (activeModeId !== "strokeWidth") return false;

  const buttons = Array.from(new Array(10), (value, index) => {
    const i = index + 1;
    const isActive = i === strokeWidth ? "stroke-picker__item--active" : "";
    const classes = `stroke-picker__item ${isActive}`;
    return (
      <li
        id={i}
        key={i}
        className={classes}
        onClick={event => handleStrokePickerClick(event)}
      >
        {i}
      </li>
    );
  });

  return <ul className="stroke-picker__list">{buttons}</ul>;
};

StrokePicker.propTypes = {
  activeModeId: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  handleStrokePickerClick: PropTypes.func.isRequired
};

export default StrokePicker;
