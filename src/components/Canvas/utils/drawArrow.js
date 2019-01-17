export const drawArrow = (canvas, fabric, strCol, strWid, fillCol, status) => {
  let arrowDrawDown, arrowDrawMove, arrowDrawUp;

  if (status === "off") {
    return (
      canvas.off("mouse:down", arrowDrawDown),
      canvas.off("mouse:move", arrowDrawMove),
      canvas.off("mouse:up", arrowDrawUp)
    );
  }

  let arrow = "";
  let isDown = false;

  arrowDrawDown = o => {
    isDown = true;
    const pointer = canvas.getPointer(o.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    arrow = new fabric.LineArrow(points, {
      stroke: strCol,
      strokeWidth: strWid,
      fill: strCol,
      originX: "center",
      originY: "center",
      selectable: false,
      hasRotatingPoint: true,
      padding: 10
    });
    canvas.add(arrow);
  };

  arrowDrawMove = o => {
    if (!isDown) return;
    const pointer = canvas.getPointer(o.e);
    arrow.set({ x2: pointer.x, y2: pointer.y });
    canvas.renderAll();
  };

  arrowDrawUp = o => {
    isDown = false;
  };

  canvas.on("mouse:down", arrowDrawDown);
  canvas.on("mouse:move", arrowDrawMove);
  canvas.on("mouse:up", arrowDrawUp);
};
