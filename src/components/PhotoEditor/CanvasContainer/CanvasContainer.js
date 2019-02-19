import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fabric } from "fabric";

import { setCanvas } from "../../../actions";
import * as utils from "./utilityMethods";

import Canvas from "./Canvas/Canvas";

import "./CanvasContainer.scss";

export class CanvasContainer extends Component {
  constructor(props) {
    super(props);

    this.handleChangeCanvas = this.handleChangeCanvas.bind(this);
  }

  canvasRef = React.createRef();

  handleChangeCanvas = () => {
    // exit if the canvas isn't initialised
    if (!this.canvasRef.current) return;

    // variables for the utility methods
    const canvas = this.canvasRef.current.fabric,
      { activeModeId, prevModeId } = this.props.canvasActiveId,
      { fillColour, strokeColour, strokeWidth, popupData } = this.props,
      shapeArgs = [canvas, fabric, strokeColour, strokeWidth, fillColour];

    // modes for drawing on the canvas (plus 'move objects' as it seemed to fit here)
    const drawingModes = {
      freeDraw() {
        utils.freeDraw(canvas, strokeColour, strokeWidth, this);
      },
      drawCircle() {
        utils.drawCircle(...shapeArgs, this);
      },
      drawTriangle() {
        utils.drawTriangle(...shapeArgs, this);
      },
      drawRectangle() {
        utils.drawRectangle(...shapeArgs, this);
      },
      drawArrow() {
        utils.drawArrow(...shapeArgs, this);
      },
      drawLine() {
        utils.drawLine(...shapeArgs, this);
      },
      moveObjects() {
        utils.moveObjects(canvas, this);
      }
    };

    // turn "off" previous mode
    let mode;
    for (mode in drawingModes) {
      if (drawingModes[mode] === drawingModes[prevModeId])
        drawingModes[mode].call("off");
    }

    // if new mode is a drawing mode, turn on the selected mode and exit function
    if (drawingModes[activeModeId]) {
      utils.shapeSetup(canvas);
      drawingModes[activeModeId].call("on");
      return;
    }

    // modify the shapes on the canvas and set styles
    const modifierModes = {
      strokeColour() {
        utils.strokeColour(canvas, strokeColour, this);
      },
      strokeWidth() {
        utils.strokeWidth(canvas, strokeWidth, this);
      },
      fillColour() {
        utils.fillColour(canvas, fillColour, this);
      },
      deleteSelected() {
        utils.deleteSelected(canvas, this);
      },
      clearAll() {
        utils.clearAll(canvas, this);
      }
    };

    // don't call a method if it has a submenu inside the popup
    // wait until the popup is shown to allow method to run
    let onOrOff = "on";
    if (popupData.idsWithPopup.includes(activeModeId)) {
      if (popupData.show) onOrOff = "off";
    }

    // call the modifier method and then revert back to the drawing mode
    modifierModes[activeModeId].call(onOrOff);
    drawingModes[prevModeId].call("on");
  };

  render() {
    const { activeTodo, strokeColour, strokeWidth } = this.props;
    return (
      <Canvas
        fabric={fabric}
        activeTodo={activeTodo}
        ref={this.canvasRef}
        strokeColour={strokeColour}
        strokeWidth={strokeWidth}
        canvasConfig={(canvas, fabric) => utils.canvasConfig(canvas, fabric)}
        createArrowType={fabric => utils.createArrowType(fabric)}
        setCanvas={canvas => this.props.setCanvas(canvas)}
        handleChangeCanvas={() => this.handleChangeCanvas()}
      />
    );
  }
}

CanvasContainer.propTypes = {
  img: PropTypes.object.isRequired,
  canvas: PropTypes.object.isRequired,
  activeTodo: PropTypes.shape({
    coOrds: PropTypes.string,
    done: PropTypes.bool,
    img: PropTypes.string.isRequired,
    imgOrig: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  canvasActiveId: PropTypes.shape({
    activeModeId: PropTypes.string.isRequired,
    prevModeId: PropTypes.string.isRequired
  }).isRequired,
  popupData: PropTypes.shape({
    show: PropTypes.bool.isRequired,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    width: PropTypes.number,
    idsWithPopup: PropTypes.array.isRequired
  }).isRequired,
  strokeColour: PropTypes.string.isRequired,
  fillColour: PropTypes.string.isRequired,
  strokeWidth: PropTypes.number.isRequired,
  setCanvas: PropTypes.func.isRequired
};

const mapStateToProps = ({
  img,
  canvas,
  activeTodo,
  canvasActiveId,
  popupData,
  strokeColour,
  fillColour,
  strokeWidth
}) => {
  return {
    img,
    canvas,
    activeTodo,
    canvasActiveId,
    popupData,
    strokeColour,
    fillColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  { setCanvas }
)(CanvasContainer);
