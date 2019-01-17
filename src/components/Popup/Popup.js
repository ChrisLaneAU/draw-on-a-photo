import "./Popup.scss";
import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Popup extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  handleClickOutside(event) {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      this.props.showPopup("off");
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

const mapStateToProps = ({ popupData }) => {
  return {
    popupData
  };
};

export default connect(
  mapStateToProps,
  actions
)(Popup);
