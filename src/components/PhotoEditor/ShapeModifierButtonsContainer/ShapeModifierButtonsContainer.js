import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import _ from "lodash";

import { setPopupData, setCanvasMode } from "../../../actions";

import ShapeModifierButtons from "./ShapeModifierButtons/ShapeModifierButtons";
import PopupButtonsContainer from "./PopupButtonsContainer/PopupButtonsContainer";

import "./ShapeModifierButtonsContainer.scss";

export class ShapeModifierButtonsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleButtonClick = element => {
    const { activeEditModeId, setPopupData, setCanvasMode } = this.props;
    setPopupData(true, element);
    setCanvasMode(element.id, activeEditModeId);
  };

  buttonGroups() {
    const { fillColour, strokeColour, strokeWidth } = this.props;

    // set icon and colour if a user selects "transparent" from the popup
    const setIcon = colour => {
      return colour === "transparent" ? "ban" : "tint";
    };
    const setColour = colour => {
      return colour === "transparent" ? "#c7c7c7" : colour;
    };

    // define groups of text labels and icon buttons
    return {
      stroke: [
        { text: "Stroke" },
        {
          icon: setIcon(strokeColour),
          colour: setColour(strokeColour),
          id: "strokeColour",
          opensPopup: true
        },
        {
          icon: "signal",
          id: "strokeWidth",
          opensPopup: true
        },
        { notification: strokeWidth }
      ],
      fill: [
        { text: "Fill" },
        {
          icon: setIcon(fillColour),
          colour: setColour(fillColour),
          id: "fillColour",
          opensPopup: true
        }
      ],
      delete: [
        { icon: "trash", id: "deleteSelected" },
        { icon: "sync-alt", id: "clearAll" }
      ]
    };
  }

  componentDidMount() {
    const buttonGroups = this.buttonGroups();
    _.map(buttonGroups, (group, groupName) => {
      return group.map(element => {
        const { id, opensPopup } = element;
        if (opensPopup) return this.props.setPopupData(false, null, id);
        return null;
      });
    });
  }

  render() {
    const { fillColour, strokeColour, strokeWidth } = this.props;
    return (
      <div data-test="component-shape-modifer-buttons-container">
        <ShapeModifierButtons
          buttonGroups={this.buttonGroups()}
          fillColour={fillColour}
          strokeColour={strokeColour}
          strokeWidth={strokeWidth}
          handleButtonClick={this.handleButtonClick}
        />
        <PopupButtonsContainer />
      </div>
    );
  }
}

ShapeModifierButtonsContainer.propTypes = {
  activeEditModeId: PropTypes.string.isRequired,
  setPopupData: PropTypes.func.isRequired,
  setCanvasMode: PropTypes.func.isRequired,
  fillColour: PropTypes.string,
  strokeColour: PropTypes.string,
  strokeWidth: PropTypes.number
};

ShapeModifierButtonsContainer.defaultProps = {
  fillColour: "transparent",
  strokeColour: "#ff0000",
  strokeWidth: 5
};

const mapStateToProps = ({
  activeEditModeId,
  fillColour,
  strokeColour,
  strokeWidth
}) => {
  return {
    activeEditModeId,
    fillColour,
    strokeColour,
    strokeWidth
  };
};

export default connect(
  mapStateToProps,
  { setPopupData, setCanvasMode }
)(ShapeModifierButtonsContainer);
