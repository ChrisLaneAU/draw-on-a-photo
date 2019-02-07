import "./DrawOnAPhoto.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../actions";
import _ from "lodash";

import Canvas from "./Canvas/Canvas";
import DrawingButtons from "./Canvas/DrawingButtons/DrawingButtons";
import ModifierButtons from "./Canvas/ModifierButtons/ModifierButtons";
import SaveButtons from "./Canvas/SaveButtons/SaveButtons";
import ToDoListItem from "./ToDoListItem/ToDoListItem";
import ModalWindow from "./ModalWindow/ModalWindow";

class ToDoListDrawPhoto extends Component {
  state = {
    canvasMode: "freeDraw",
    fillColour: "transparent",
    strokeColour: "#ff0000",
    strokeWidth: 5
  };

  /*handleInputChange = event => {
    this.setState({ editPhotoValue: event.target.value });
  };

  handleFormSubmit = event => {
    const { editPhotoValue } = this.state;
    const { addToDo } = this.props;
    event.preventDefault();
    addToDo({ title: editPhotoValue });
    this.setState({ editPhotoValue: "" });
  };*/

  renderDrawOnAPhoto = () => {
    const { bgImg } = this.state;

    if (this.props.modalVisible === true) {
      /*
      <form onSubmit={this.handleFormSubmit}>
        <div className="input-field">
          <i className="material-icons prefix">note_add</i>
          <input
            value={editPhotoValue}
            onChange={this.handleInputChange}
            id="toDoNext"
            type="text"
          />
        </div>
      </form>
      */
      const { fillColour, strokeColour } = this.props;
      return (
        <div id="todo-add-form">
          <Canvas
            bgImg={bgImg}
            fillColour={fillColour}
            strokeColour={strokeColour}
          />
          <DrawingButtons />
          <ModifierButtons />
          <SaveButtons />
        </div>
      );
    }
  };

  renderToDos() {
    const { data } = this.props;

    const toDos = _.map(data, (value, key) => {
      return (
        <div key={key}>
          <ToDoListItem todoId={key} todo={value} />
        </div>
      );
    });
    if (!_.isEmpty(toDos)) {
      return toDos;
    }
    return (
      <div>
        <p style={{ fontFamily: "sans-serif" }}>Loading...</p>
      </div>
    );
  }

  componentDidMount() {
    const { photoToEdit, strokeColour, fillColour, strokeWidth } = this.state;
    this.props.fetchToDos();
    this.props.setStrokeColour(strokeColour);
    this.props.setFillColour(fillColour);
    this.props.setStrokeWidth(strokeWidth);
    this.props.setCanvasMode("freeDraw", "freeDraw");
    this.props.showPopup("off");
    this.props.setActiveEditMode("freeDraw");
    this.props.showModal(false);
    this.props.setLoadingOverlay(false);
  }

  render() {
    /*return (
      <div className="to-do-list-container">
        <div className="row">{this.renderDrawOnAPhoto()}</div>
      </div>
    );*/

    return (
      <div>
        <div className="to-do-list-container">
          <div className="row">{this.renderToDos()}</div>
        </div>
        {this.props.modalVisible ? (
          <ModalWindow visible={this.props.modalVisible}>
            {this.renderDrawOnAPhoto()}
          </ModalWindow>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({
  data,
  modalVisible,
  canvas,
  strokeColour,
  fillColour,
  strokeWidth
}) => {
  return {
    data,
    modalVisible,
    canvas,
    strokeColour,
    fillColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  actions
)(ToDoListDrawPhoto);
