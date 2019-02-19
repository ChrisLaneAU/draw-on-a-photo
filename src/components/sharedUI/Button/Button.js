import React from "react";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = ({ content, handleClick, classes, color }) => {
  return (
    <button
      data-test="component-button"
      onClick={handleClick}
      className={`${classes} button--${color}`}
    >
      {content}
    </button>
  );
};

Button.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]).isRequired,
  handleClick: PropTypes.func.isRequired,
  classes: PropTypes.string,
  color: PropTypes.string
};

Button.defaultProps = {
  classes: "button",
  color: "grey"
};

export default Button;
