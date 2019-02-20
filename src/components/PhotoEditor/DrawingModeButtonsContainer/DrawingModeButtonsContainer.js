import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setActiveEditMode, setCanvasMode } from "../../../actions";

import DrawingModeButtons from "./DrawingModeButtons/DrawingModeButtons";

import "./DrawingModeButtonsContainer.scss";

export class DrawingModeButtonsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  createIcons() {
    return [
      { icon: "pencil-alt", id: "freeDraw" },
      { icon: "circle", id: "drawCircle" },
      { icon: "play", id: "drawTriangle", transform: "rotate-270" },
      { icon: "square", id: "drawRectangle" },
      { icon: "long-arrow-alt-right", id: "drawArrow" },
      { icon: "minus", id: "drawLine" },
      { icon: "arrows-alt", id: "moveObjects" }
    ];
  }

  handleClick = element => {
    const { activeEditModeId, setActiveEditMode, setCanvasMode } = this.props;
    setActiveEditMode(element.id);
    setCanvasMode(element.id, activeEditModeId);
  };

  render() {
    return (
      <div
        data-test="component-drawing-mode-buttons-container"
        className="canvas-buttons"
      >
        <DrawingModeButtons
          icons={this.createIcons()}
          activeEditModeId={this.props.activeEditModeId}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
}

DrawingModeButtonsContainer.propTypes = {
  setActiveEditMode: PropTypes.func.isRequired,
  setCanvasMode: PropTypes.func.isRequired,
  activeEditModeId: PropTypes.string
};

DrawingModeButtonsContainer.defaultProps = {
  activeEditModeId: "freeDraw"
};

const mapStateToProps = ({ activeEditModeId }) => {
  return { activeEditModeId };
};

export default connect(
  mapStateToProps,
  { setActiveEditMode, setCanvasMode }
)(DrawingModeButtonsContainer);
