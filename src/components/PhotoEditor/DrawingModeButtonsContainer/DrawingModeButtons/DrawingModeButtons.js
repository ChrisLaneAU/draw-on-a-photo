import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./DrawingModeButtons.scss";

const DrawingModeButtons = ({ icons, activeEditModeId, handleClick }) => {
  const renderButtons = () => {
    const defaultClasses = "canvas-buttons__row canvas-buttons__row--1";
    const iconClass = "canvas-buttons__icon canvas-buttons__icon--1";
    const iconActiveClass = `canvas-buttons__icon--active ${iconClass}`;

    const iconButtons = icons.map(iconObj => {
      const { icon, id, transform } = iconObj;
      return (
        <button
          key={icon}
          id={id}
          className="canvas-buttons__button"
          onClick={event => handleClick(event.target)}
        >
          <FontAwesomeIcon
            icon={icon}
            className={activeEditModeId === id ? iconActiveClass : iconClass}
            transform={transform}
            style={{ pointerEvents: "none" }}
          />
        </button>
      );
    });

    return <div className={defaultClasses}>{iconButtons}</div>;
  };

  return (
    <div data-test="component-drawing-mode-buttons" className="canvas-buttons">
      {renderButtons()}
    </div>
  );
};

DrawingModeButtons.propTypes = {
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string,
      id: PropTypes.string
    })
  ).isRequired,
  activeEditModeId: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
};

export default DrawingModeButtons;
