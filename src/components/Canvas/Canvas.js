import "./Canvas.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fabric } from "fabric";
import * as actions from "../../actions";
import * as utils from "./utils";
import Popup from "../Popup/Popup";
import ColourPicker from "./ModifierButtons/PopupButtons/ColourPicker/ColourPicker";
import StrokePicker from "./ModifierButtons/PopupButtons/StrokePicker/StrokePicker";

class Canvas extends Component {
  canvasRef = React.createRef();

  handleChangeCanvas = () => {
    // exit if the canvas isn't initialised
    if (!this.canvasRef.current) return;

    // variables for the utility methods
    const canvas = this.canvasRef.current.fabric,
      { activeModeId, prevModeId } = this.props.canvasActiveId,
      { fillColour, strokeColour, strokeWidth } = this.props,
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
    for (let mode in drawingModes) {
      if (drawingModes[mode] === drawingModes[prevModeId])
        drawingModes[mode].call("off");
    }

    // if new mode is a drawing mode, turn on the selected mode and exit function
    if (drawingModes[activeModeId])
      return utils.shapeSetup(canvas), drawingModes[activeModeId].call("on");

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
    // TODO: this is a bit inelegant - need a single place to set the buttons or
    // methods that require the popup
    let onOrOff = "on";
    if (
      activeModeId === "strokeColour" ||
      activeModeId === "strokeWidth" ||
      activeModeId === "fillColour"
    ) {
      if (this.props.popupData.show === "on") onOrOff = "off";
    }

    // call the modifier method and then revert back to the drawing mode
    modifierModes[activeModeId].call(onOrOff);
    drawingModes[prevModeId].call("on");
  };

  renderPopup() {
    const { activeModeId } = this.props.canvasActiveId;
    if (
      (activeModeId === "fillColour" ||
        activeModeId === "strokeColour" ||
        activeModeId === "strokeWidth") &&
      this.props.popupData.show === "on"
    ) {
      return (
        <Popup
          style={{
            fontSize: "16px"
          }}
        >
          <ColourPicker />
          <StrokePicker />
        </Popup>
      );
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
  }

  componentDidMount() {
    // initialise Fabric's canvas and set the ref
    this.canvas = new fabric.Canvas("paper");
    this.canvasRef.current.fabric = this.canvas;

    // initial state and configuration (height is arbitrary as it's set by image later)
    const canvas = this.canvas,
      { strokeColour, strokeWidth } = this.props,
      canvasHeight = 300;
    utils.canvasConfig(canvas, fabric, strokeColour, strokeWidth, canvasHeight);
    this.props.setCanvas(canvas);

    // setup the background image
    const { img, imgOrig } = this.props.activeTodo;

    // create arrow type as fabric doesn't have one out of the box
    utils.createArrowType(fabric);

    if (img) {
      const bgImg = new Image();
      bgImg.src = imgOrig || img;
      bgImg.onload = () => {
        // scale image:
        //  - if larger than the window innerwidth, make it 95% to allow padding
        //  - make sure the image does not scale up above a factor of 1
        //  - make sure height isn't more than 70% of viewport to allow buttons to show
        const scaleFactor = Math.min(
          (window.innerHeight / bgImg.height) * 0.7,
          Math.min((window.innerWidth / bgImg.width) * 0.95, 1)
        );

        canvas.setHeight(bgImg.height * scaleFactor);
        canvas.setWidth(bgImg.width * scaleFactor);
        canvas.setBackgroundImage(bgImg.src, canvas.renderAll.bind(canvas), {
          scaleX: scaleFactor,
          scaleY: scaleFactor,
          crossOrigin: "anonymous"
          //angle: photoData.rotate, left:leftDist, top:topDist
        });

        // load any saved coordinates of drawings (stringified JSON)
        const { coOrds } = this.props.activeTodo;
        canvas.loadFromJSON(coOrds, canvas.renderAll.bind(canvas));
      };
    }
  }

  render() {
    return (
      <div>
        <canvas
          className="edit-photo"
          id="paper"
          onChange={this.handleChangeCanvas()}
          ref={this.canvasRef}
        />

        {this.renderPopup()}
      </div>
    );
  }
}

const mapStateToProps = ({
  img,
  activeTodo,
  canvasActiveId,
  popupData,
  strokeColour,
  fillColour,
  strokeWidth
}) => {
  return {
    img,
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
  actions
)(Canvas);
