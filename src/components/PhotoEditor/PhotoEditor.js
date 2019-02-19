import React, { Component } from "react";
import { connect } from "react-redux";

import { saveImg, showModal } from "../../actions";

import CanvasContainer from "../PhotoEditor/CanvasContainer/CanvasContainer";
import DrawingModeButtonsContainer from "../PhotoEditor/DrawingModeButtonsContainer/DrawingModeButtonsContainer";
import ShapeModifierButtonsContainer from "../PhotoEditor/ShapeModifierButtonsContainer/ShapeModifierButtonsContainer";
import SaveButtonsContainer from "../PhotoEditor/SaveButtonsContainer/SaveButtonsContainer";

import "./PhotoEditor.scss";

export class PhotoEditor extends Component {
  render() {
    const { canvas, activeTodo } = this.props;

    return (
      <div data-test="component-photo-editor">
        <CanvasContainer />
        <DrawingModeButtonsContainer />
        <ShapeModifierButtonsContainer />
        <SaveButtonsContainer
          canvas={canvas}
          activeTodo={activeTodo}
          saveImg={(newSrc, id, coOrds) =>
            this.props.saveImg(newSrc, id, coOrds)
          }
          showModal={show => this.props.showModal(show)}
        />
      </div>
    );
  }
}

const mapStateToProps = ({
  activeTodo,
  canvas,
  toDoItemsData,
  modalVisible,
  strokeColour,
  fillColour,
  strokeWidth
}) => {
  return {
    activeTodo,
    canvas,
    toDoItemsData,
    modalVisible,
    strokeColour,
    fillColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  { saveImg, showModal }
)(PhotoEditor);
