import React, { Component } from "react";
import PropTypes from "prop-types";

import "./Popup.scss";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.setPopupData(false);
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  render() {
    const { offsetX, offsetY, width } = this.props.popupData;
    return (
      <div
        data-test="component-popup"
        ref={this.setWrapperRef}
        style={
          (this.props.style,
          {
            left: `calc(${offsetX}px - ${50 - width / 2}px`,
            top: `calc(${offsetY}px - 20px - 11.3em)`
          })
        }
        className="popup-container"
      >
        {this.props.children}
      </div>
    );
  }
}

Popup.propTypes = {
  setPopupData: PropTypes.func.isRequired,
  popupData: PropTypes.shape({
    show: PropTypes.bool,
    offsetX: PropTypes.number,
    offsetY: PropTypes.number,
    width: PropTypes.number
  }).isRequired,
  children: PropTypes.node
};

Popup.defaultProps = {
  children: React.createElement("div")
};

export default Popup;
