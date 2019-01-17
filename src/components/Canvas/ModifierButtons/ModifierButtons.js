import "./ModifierButtons.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ModifierButtons extends Component {
  handleIconClick = event => {
    let element = event.target;
    const { tagName } = element;
    if (tagName !== "svg") element = element.closest("svg");
    this.props.showPopup("on", element);
    const { activeEditModeId } = this.props;
    this.props.setCanvasMode(element.id, activeEditModeId);
  };

  renderElements() {
    const secondRowClasses = "canvas-buttons__row canvas-buttons__row--2",
      secondRowColumnClasses = "canvas-buttons__column",
      iconClass = "canvas-buttons__icon canvas-buttons__icon--2",
      textClass = "canvas-buttons__text",
      notificationClass = "canvas-buttons__notification",
      { strokeColour, fillColour, strokeWidth } = this.props,
      icons = {
        column1: [
          { text: "Stroke" },
          {
            icon: strokeColour === "transparent" ? "ban" : "tint",
            color: strokeColour === "transparent" ? "#c7c7c7" : strokeColour,
            id: "strokeColour"
          },
          { icon: "signal", id: "strokeWidth" },
          { notification: strokeWidth }
        ],
        column2: [
          { text: "Fill" },
          {
            icon: fillColour === "transparent" ? "ban" : "tint",
            color: fillColour === "transparent" ? "#c7c7c7" : fillColour,
            id: "fillColour"
          }
        ],
        column3: [
          { icon: "trash", id: "deleteSelected" },
          { icon: "sync-alt", id: "clearAll" }
        ]
      };

    let allIcons = [];

    for (let key in icons) {
      const secondRowIcons = icons[key].map(iconObj => {
        const { id, icon, color, text, notification } = iconObj;
        if (icon)
          return (
            <FontAwesomeIcon
              icon={icon}
              key={icon}
              id={id}
              className={iconClass}
              style={{ color: color }}
              onClick={this.handleIconClick}
            />
          );
        if (text)
          return (
            <span key={text} className={textClass}>
              {text}
            </span>
          );
        return (
          <span key={notification} className={notificationClass}>
            {notification}
          </span>
        );
      });
      allIcons.push(
        <div key={key} className={secondRowColumnClasses}>
          {secondRowIcons}
        </div>
      );
    }

    return <div className={secondRowClasses}>{allIcons}</div>;
  }

  render() {
    return <div className="canvas-buttons">{this.renderElements()}</div>;
  }
}

const mapStateToProps = ({
  activeEditModeId,
  popupData,
  fillColour,
  strokeColour,
  strokeWidth
}) => {
  return {
    activeEditModeId,
    popupData,
    fillColour,
    strokeColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  actions
)(ModifierButtons);
