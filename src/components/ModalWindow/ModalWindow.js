import "./ModalWindow.scss";
import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class ModalWindow extends Component {
  modalWindowRef = React.createRef();

  componentDidMount() {
    this.modalWindowRef.current.classList.add("modal__window--active");
  }

  render() {
    return (
      <div className="modal__bg">
        <div className="modal__window" ref={this.modalWindowRef}>
          <button
            className="modal__close-btn"
            onClick={() => this.props.showModal(false)}
          >
            <FontAwesomeIcon className="modal__close-icon" icon={"times"} />
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ img, modalVisible }) => {
  return {
    img,
    modalVisible
  };
};

export default connect(
  mapStateToProps,
  actions
)(ModalWindow);
