export const drawTriangle = (
  canvas,
  fabric,
  strCol,
  strWid,
  fillCol,
  status
) => {
  let triDrawDown, triDrawMove, triDrawUp;

  if (status === "off") {
    return (
      canvas.off("mouse:down", triDrawDown),
      canvas.off("mouse:move", triDrawMove),
      canvas.off("mouse:up", triDrawUp)
    );
  }

  if (strWid === 0) strCol = fillCol;

  let tri = "";
  let isDown = false;
  let origX = 0;
  let origY = 0;

  triDrawDown = o => {
    isDown = true;
    const pointer = canvas.getPointer(o.e);
    origX = pointer.x;
    origY = pointer.y;
    tri = new fabric.Triangle({
      left: origX,
      top: origY,
      originX: "left",
      originY: "top",
      width: 2,
      height: 2,
      angle: 0,
      stroke: strCol,
      strokeWidth: strWid,
      fill: fillCol,
      transparentCorners: false,
      selectable: false
    });
    canvas.add(tri);
  };

  triDrawMove = o => {
    if (!isDown) return;
    const pointer = canvas.getPointer(o.e);
    if (origX > pointer.x) {
      tri.set({ left: Math.abs(pointer.x) });
    }
    if (origY > pointer.y) {
      tri.set({ top: Math.abs(pointer.y) });
    }
    tri.set({ width: Math.abs(origX - pointer.x) });
    tri.set({ height: Math.abs(origY - pointer.y) });
    canvas.renderAll();
  };

  triDrawUp = o => {
    isDown = false;
  };

  canvas.on("mouse:down", triDrawDown);
  canvas.on("mouse:move", triDrawMove);
  canvas.on("mouse:up", triDrawUp);
};
