export const drawLine = (canvas, fabric, strCol, strWid, fillCol, status) => {
  let lineDrawDown, lineDrawMove, lineDrawUp;

  if (status === "off") {
    return (
      canvas.off("mouse:down", lineDrawDown),
      canvas.off("mouse:move", lineDrawMove),
      canvas.off("mouse:up", lineDrawUp)
    );
  }

  let line = "";
  let isDown = false;

  lineDrawDown = o => {
    isDown = true;
    const pointer = canvas.getPointer(o.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];
    line = new fabric.Line(points, {
      stroke: strCol,
      strokeWidth: strWid,
      fill: fillCol,
      originX: "center",
      originY: "center",
      selectable: false,
      hasRotatingPoint: true
    });
    canvas.add(line);
  };

  lineDrawMove = o => {
    if (!isDown) return;
    const pointer = canvas.getPointer(o.e);
    line.set({ x2: pointer.x, y2: pointer.y });
    canvas.renderAll();
  };

  lineDrawUp = o => {
    isDown = !isDown;
  };

  canvas.on("mouse:down", lineDrawDown);
  canvas.on("mouse:move", lineDrawMove);
  canvas.on("mouse:up", lineDrawUp);
};
