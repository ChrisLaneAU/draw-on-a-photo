import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./ImageSavingOverlay.scss";

const ImageSavingOverlay = ({ icon }) => {
  return (
    <div className="image-saving-overlay">
      <FontAwesomeIcon
        icon={icon}
        style={{ height: "3em", width: "3em" }}
        spin
      />
    </div>
  );
};

ImageSavingOverlay.propTypes = {
  icon: PropTypes.string
};

ImageSavingOverlay.defaultProps = {
  icon: "spinner"
};

export default ImageSavingOverlay;
