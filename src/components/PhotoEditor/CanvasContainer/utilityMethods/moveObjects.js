export const moveObjects = (canvas, status) => {
  if (status === "off") return;
  canvas.isDrawingMode = false;
  canvas.selection = true;
  canvas.hoverCursor = "all-scroll";
  canvas.forEachObject(function(o) {
    o.selectable = true;
    canvas.on("object:selected", function(e) {
      o.transparentCorners = false;
    });
  });
  canvas.forEachObject(function(o) {
    o.setCoords();
  });
};
