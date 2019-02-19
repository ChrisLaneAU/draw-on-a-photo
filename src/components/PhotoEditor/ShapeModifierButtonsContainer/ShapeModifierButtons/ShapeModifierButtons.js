import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";

import "./ShapeModifierButtons.scss";

const ShapeModifierButtons = ({
  buttonGroups,
  strokeColour,
  fillColour,
  strokeWidth,
  handleButtonClick
}) => {
  // start render process
  const renderGroups = () => {
    const createGroups = _.map(buttonGroups, (group, groupName) => {
      const createElements = group.map(element => {
        const { id, icon, colour, text, notification } = element;

        // create elements
        if (icon)
          return (
            <button
              key={id}
              id={id}
              className="canvas-buttons__button"
              onClick={event => handleButtonClick(event.target)}
            >
              <FontAwesomeIcon
                icon={icon}
                className="canvas-buttons__icon canvas-buttons__icon--2"
                style={{ color: colour, pointerEvents: "none" }}
              />
            </button>
          );
        if (text)
          return (
            <span key={text} className="canvas-buttons__text">
              {text}
            </span>
          );
        return (
          <span key={notification} className="canvas-buttons__notification">
            {notification}
          </span>
        );
      });

      // create groups with elements
      return (
        <div key={groupName} className="canvas-buttons__group">
          {createElements}
        </div>
      );
    });

    // render groups
    return (
      <div className="canvas-buttons__row canvas-buttons__row--2">
        {createGroups}
      </div>
    );
  };

  return <div className="canvas-buttons">{renderGroups()}</div>;
};

ShapeModifierButtons.propTypes = {
  buttonGroups: PropTypes.objectOf(
    PropTypes.arrayOf(
      PropTypes.shape({
        icon: PropTypes.string,
        text: PropTypes.string,
        id: PropTypes.string,
        opensPopup: PropTypes.bool
      })
    )
  ).isRequired,
  handleButtonClick: PropTypes.func.isRequired,
  strokeColour: PropTypes.string,
  fillColour: PropTypes.string,
  strokeWidth: PropTypes.number
};

ShapeModifierButtons.defaultProps = {
  strokeColour: "#ff0000",
  fillColour: "transparent",
  strokeWidth: 5
};

export default ShapeModifierButtons;
