import "./LoadingOverlay.scss";
import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingOverlay = state => {
  return (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="loading-overlay">
        <FontAwesomeIcon
          icon={"spinner"}
          style={{ height: "3em", width: "3em" }}
          spin
        />
      </div>
    </div>
  );
};

export default LoadingOverlay;
