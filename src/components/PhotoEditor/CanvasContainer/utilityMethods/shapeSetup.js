export const shapeSetup = canvas => {
  canvas.isDrawingMode = false;
  canvas.selection = false;
  canvas.forEachObject(function(o) {
    o.selectable = false;
  });
  canvas.defaultCursor = "crosshair";
  canvas.hoverCursor = "crosshair";
  canvas.renderAll();
};
