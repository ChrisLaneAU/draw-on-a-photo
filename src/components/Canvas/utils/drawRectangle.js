export const drawRectangle = (
  canvas,
  fabric,
  strCol,
  strWid,
  fillCol,
  status
) => {
  let rectDrawDown, rectDrawMove, rectDrawUp;

  if (status === "off") {
    return (
      canvas.off("mouse:down", rectDrawDown),
      canvas.off("mouse:move", rectDrawMove),
      canvas.off("mouse:up", rectDrawUp)
    );
  }

  if (strWid === 0) strCol = fillCol;

  let rect = "";
  let isDown = false;
  let origX = 0;
  let origY = 0;

  rectDrawDown = o => {
    isDown = true;
    const pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    rect = new fabric.Rect({
      left: origX,
      top: origY,
      originX: "left",
      originY: "top",
      width: pointer.x - origX,
      height: pointer.y - origY,
      angle: 0,
      stroke: strCol,
      strokeWidth: strWid,
      fill: fillCol,
      transparentCorners: false,
      selectable: false
    });
    canvas.add(rect);
  };

  rectDrawMove = o => {
    if (!isDown) return;
    var pointer = canvas.getPointer(o.e);
    if (origX > pointer.x) {
      rect.set({ left: Math.abs(pointer.x) });
    }
    if (origY > pointer.y) {
      rect.set({ top: Math.abs(pointer.y) });
    }
    rect.set({ width: Math.abs(origX - pointer.x) });
    rect.set({ height: Math.abs(origY - pointer.y) });
    canvas.renderAll();
  };

  rectDrawUp = o => {
    isDown = false;
  };

  canvas.on("mouse:down", rectDrawDown);
  canvas.on("mouse:move", rectDrawMove);
  canvas.on("mouse:up", rectDrawUp);
};
