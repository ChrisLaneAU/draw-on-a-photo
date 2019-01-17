export const canvasConfig = (
  canvas,
  fabric,
  strokeColour,
  strokeWidth,
  canvasHeight
) => {
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.color = strokeColour;
  canvas.freeDrawingBrush.width = strokeWidth;
  canvas.setWidth(canvasHeight);
  canvas.setHeight(canvasHeight);

  canvas.on("object:moving", function(e) {
    const obj = e.target;
    // if object is too big ignore
    if (
      obj.currentHeight > obj.canvas.height ||
      obj.currentWidth > obj.canvas.width
    ) {
      return;
    }
    obj.setCoords();
    // top-left  corner
    if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
      obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
      obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
    }
    // bot-right corner
    if (
      obj.getBoundingRect().top + obj.getBoundingRect().height >
        obj.canvas.height ||
      obj.getBoundingRect().left + obj.getBoundingRect().width >
        obj.canvas.width
    ) {
      obj.top = Math.min(
        obj.top,
        obj.canvas.height -
          obj.getBoundingRect().height +
          obj.top -
          obj.getBoundingRect().top
      );
      obj.left = Math.min(
        obj.left,
        obj.canvas.width -
          obj.getBoundingRect().width +
          obj.left -
          obj.getBoundingRect().left
      );
    }
  });

  canvas.on("object:scaling", function(e) {
    e.target.resizeToScale();
  });

  canvas.on("object:added", function(e) {
    e.target._origStrokeWidth = e.target.strokeWidth;
  });

  canvas.on("selection:created", function(e) {
    e.target.transparentCorners = false;
  });

  fabric.Object.prototype.objectCaching = false;

  // customise fabric.Object with a method to resize rather than just scale after tranformation
  fabric.Object.prototype.resizeToScale = function() {
    if (this.type !== "activeSelection") {
      this.strokeWidth =
        this._origStrokeWidth / Math.max(this.scaleX, this.scaleY);
    } else {
      this._objects.forEach(function(obj) {
        obj.strokeWidth =
          obj._origStrokeWidth / Math.max(obj.group.scaleX, obj.group.scaleY);
      });
    }
  };
};
