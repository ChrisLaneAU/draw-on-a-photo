import React, { Component } from "react";
import PropTypes from "prop-types";

import SaveButtons from "./SaveButtons/SaveButtons";

import "./SaveButtonsContainer.scss";

export class SaveButtonsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleSaveClick = this.handleSaveClick.bind(this);
    this.handleDownloadClick = this.handleDownloadClick.bind(this);
    this.handleCancelClick = this.handleCancelClick.bind(this);
  }

  createButtons(options = []) {
    // add any custom buttons to the buttons array
    const buttons = [
      {
        id: "save",
        content: "Save",
        handleClick: this.handleSaveClick,
        classNames: "button__canvas-save-btns",
        color: "green"
      },
      {
        id: "download",
        content: "Download",
        handleClick: this.handleDownloadClick,
        classNames: "button__canvas-save-btns",
        color: "purple"
      },
      {
        id: "cancel",
        content: "Cancel",
        handleClick: this.handleCancelClick,
        classNames: "button__canvas-save-btns",
        color: "orange"
      }
    ];

    const selectedButtons =
      options.length > 0
        ? buttons.filter(button => {
            return Array.from(arguments).includes(button.id);
          })
        : buttons;

    return selectedButtons;
  }

  handleSaveClick() {
    const { canvas, activeTodo } = this.props;
    const { id } = activeTodo;
    const newSrc = canvas.toDataURL({
      format: "jpeg"
    });
    canvas.setBackgroundImage(null, canvas.renderAll.bind(canvas));
    const coOrds = JSON.stringify(canvas);
    this.props.saveImg(newSrc, id, coOrds);
    this.props.showModal(false);
  }

  handleDownloadClick() {
    const { canvas } = this.props;
    const newSrc = canvas.toDataURL({
      format: "jpeg"
    });
    let img = new Image();
    img.src = newSrc;
    window.open("").document.write(img.outerHTML);
  }

  handleCancelClick() {
    this.props.showModal(false);
  }

  render() {
    // choose which buttons you want by passing the button ids as strings into
    // createButtons() OR leave blank to include all
    return (
      <div
        data-test="component-save-buttons-container"
        className="save-buttons"
      >
        <SaveButtons buttons={this.createButtons("save", "cancel")} />
      </div>
    );
  }
}

SaveButtonsContainer.propTypes = {
  canvas: PropTypes.object.isRequired,
  activeTodo: PropTypes.shape({
    coOrds: PropTypes.string,
    done: PropTypes.bool,
    id: PropTypes.string,
    img: PropTypes.string,
    imgOrig: PropTypes.string,
    title: PropTypes.string
  }).isRequired
};

export default SaveButtonsContainer;
