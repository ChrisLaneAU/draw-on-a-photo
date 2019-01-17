import "./DrawingButtons.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DrawingButtons extends Component {
  handleClick = event => {
    let element = event.target;
    const { tagName } = element;
    if (tagName !== "svg") element = element.closest("svg");
    this.props.setActiveEditMode(element.id);
    this.props.setCanvasMode(element.id, this.props.activeEditModeId);
  };

  renderButtons() {
    const firstRowClasses = "canvas-buttons__row canvas-buttons__row--1",
      iconClass = "canvas-buttons__icon canvas-buttons__icon--1",
      iconActive = `canvas-buttons__icon--active ${iconClass}`,
      icons = [
        { icon: "pencil-alt", id: "freeDraw" },
        { icon: "circle", id: "drawCircle" },
        { icon: "play", id: "drawTriangle", transform: "rotate-270" },
        { icon: "square", id: "drawRectangle" },
        { icon: "long-arrow-alt-right", id: "drawArrow" },
        { icon: "minus", id: "drawLine" },
        { icon: "arrows-alt", id: "moveObjects" }
      ],
      firstRowIcons = icons.map(iconObj => {
        const { icon, id, transform } = iconObj,
          { activeEditModeId } = this.props;
        return (
          <FontAwesomeIcon
            icon={icon}
            id={id}
            key={icon}
            className={activeEditModeId === id ? iconActive : iconClass}
            transform={transform}
            onClick={this.handleClick}
          />
        );
      });

    return <div className={firstRowClasses}>{firstRowIcons}</div>;
  }

  render() {
    return <div className="canvas-buttons">{this.renderButtons()}</div>;
  }
}

const mapStateToProps = ({ activeEditModeId }) => {
  return { activeEditModeId };
};

export default connect(
  mapStateToProps,
  actions
)(DrawingButtons);
