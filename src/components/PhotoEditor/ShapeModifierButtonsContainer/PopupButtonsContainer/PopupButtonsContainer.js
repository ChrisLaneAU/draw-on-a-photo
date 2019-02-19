import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import {
  setStrokeWidth,
  setFillColour,
  setStrokeColour,
  setPopupData
} from "../../../../actions";

import Popup from "../../../sharedUI/Popup/Popup";
import ColourPicker from "./ColourPicker/ColourPicker";
import StrokePicker from "./StrokePicker/StrokePicker";

export class PopupButtonsContainer extends Component {
  constructor(props) {
    super(props);

    this.handleStrokePickerClick = this.handleStrokePickerClick.bind(this);
  }

  handleColourPickerClick = id => {
    const {
      canvasActiveId: { activeModeId },
      setFillColour,
      setStrokeColour,
      setPopupData
    } = this.props;
    activeModeId === "fillColour"
      ? setFillColour(id || "transparent")
      : setStrokeColour(id || "transparent");
    setPopupData(false);
  };

  handleStrokePickerClick = event => {
    this.props.setStrokeWidth(event.target.id);
    this.props.setPopupData(false);
  };

  renderPopup() {
    const {
      canvasActiveId: { activeModeId },
      strokeColour,
      fillColour,
      strokeWidth,
      popupData,
      setStrokeWidth,
      setPopupData
    } = this.props;
    const { show, idsWithPopup } = popupData;
    if (idsWithPopup.includes(activeModeId) && show) {
      return (
        <Popup popupData={popupData} setPopupData={setPopupData}>
          <ColourPicker
            activeModeId={activeModeId}
            strokeColour={strokeColour}
            fillColour={fillColour}
            handleColourPickerClick={this.handleColourPickerClick}
            setFillColour={() => setFillColour()}
            setStrokeColour={() => setStrokeColour()}
            setPopupData={() => setPopupData()}
          />
          <StrokePicker
            activeModeId={activeModeId}
            strokeWidth={strokeWidth}
            handleStrokePickerClick={this.handleStrokePickerClick}
            setStrokeWidth={() => setStrokeWidth()}
            setPopupData={() => setPopupData()}
          />
        </Popup>
      );
    }
  }

  render() {
    return <>{this.renderPopup()}</>;
  }
}

PopupButtonsContainer.propTypes = {
  canvasActiveId: PropTypes.shape({
    activeModeId: PropTypes.string,
    prevModeId: PropTypes.string
  }).isRequired,
  popupData: PropTypes.shape({
    show: PropTypes.bool,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    width: PropTypes.number
  }).isRequired,
  strokeWidth: PropTypes.number.isRequired,
  fillColour: PropTypes.string.isRequired,
  strokeColour: PropTypes.string.isRequired
};

const mapStateToProps = ({
  canvasActiveId,
  popupData,
  strokeWidth,
  fillColour,
  strokeColour
}) => {
  return {
    canvasActiveId,
    popupData,
    strokeWidth,
    fillColour,
    strokeColour
  };
};

export default connect(
  mapStateToProps,
  {
    setStrokeWidth,
    setFillColour,
    setStrokeColour,
    setPopupData
  }
)(PopupButtonsContainer);
