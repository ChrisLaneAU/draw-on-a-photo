import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "./Canvas.scss";

const Canvas = ({
  fabric,
  activeTodo,
  setCanvas,
  canvasConfig,
  createArrowType,
  handleChangeCanvas
}) => {
  useEffect(() => {
    // initialise Fabric's canvas and set the ref
    const canvas = new fabric.Canvas("paper");

    // initial state and configuration
    canvasConfig(canvas, fabric);
    setCanvas(canvas);

    // setup the background image
    const { img, imgOrig } = activeTodo;

    // create arrow type as fabric doesn't have one out of the box
    createArrowType(fabric);

    if (img) {
      const bgImg = new Image();
      bgImg.src = imgOrig || img;
      bgImg.onload = () => {
        /**
         * scale image:
         *  if larger than the window innerwidth, make it 95% to allow padding
         *  make sure the image does not scale up above a factor of 1
         *  make sure height isn't more than 70% of viewport to allow buttons to display
         */
        const scaleFactor = Math.min(
          (window.innerHeight / bgImg.height) * 0.7,
          Math.min((window.innerWidth / bgImg.width) * 0.95, 1)
        );

        canvas.setHeight(bgImg.height * scaleFactor);
        canvas.setWidth(bgImg.width * scaleFactor);
        canvas.setBackgroundImage(bgImg.src, canvas.renderAll.bind(canvas), {
          scaleX: scaleFactor,
          scaleY: scaleFactor,
          crossOrigin: "anonymous"
          //angle: photoData.rotate, left:leftDist, top:topDist
        });

        // load any saved coordinates of drawings (stringified JSON)
        const { coOrds } = activeTodo;
        canvas.loadFromJSON(coOrds, canvas.renderAll.bind(canvas));
      };
    }
  }, []);

  return (
    <canvas
      data-test="component-canvas"
      className="edit-photo"
      id="paper"
      onChange={handleChangeCanvas()}
    />
  );
};

Canvas.propTypes = {
  fabric: PropTypes.shape({ version: PropTypes.oneOf(["2.4.3"]).isRequired })
    .isRequired,
  activeTodo: PropTypes.shape({
    coOrds: PropTypes.string,
    done: PropTypes.bool,
    img: PropTypes.string.isRequired,
    imgOrig: PropTypes.string,
    title: PropTypes.string
  }).isRequired,
  setCanvas: PropTypes.func.isRequired,
  canvasConfig: PropTypes.func.isRequired,
  createArrowType: PropTypes.func.isRequired,
  handleChangeCanvas: PropTypes.func.isRequired
};

export default Canvas;
