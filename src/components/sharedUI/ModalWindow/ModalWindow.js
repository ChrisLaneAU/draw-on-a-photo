import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ModalWindow.scss";

const ModalWindow = ({ showModal, children }) => {
  return (
    <div data-test="component-modal-window" className="modal__bg">
      <div className="modal__window modal__window--active">
        <button
          data-test="component-modal-window-button-close"
          className="modal__close-btn"
          onClick={() => showModal(false)}
        >
          <FontAwesomeIcon className="modal__close-icon" icon={"times"} />
        </button>
        {children}
      </div>
    </div>
  );
};

ModalWindow.propTypes = {
  showModal: PropTypes.func.isRequired,
  children: PropTypes.node
};

ModalWindow.defaultProps = {
  children: React.createElement("div")
};

export default ModalWindow;
