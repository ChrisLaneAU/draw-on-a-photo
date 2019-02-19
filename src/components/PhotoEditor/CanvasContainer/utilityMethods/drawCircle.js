export const drawCircle = (canvas, fabric, strCol, strWid, fillCol, status) => {
  let circDrawDown, circDrawMove, circDrawUp;

  if (status === "off") {
    return (
      canvas.off("mouse:down", circDrawDown),
      canvas.off("mouse:move", circDrawMove),
      canvas.off("mouse:up", circDrawUp)
    );
  }

  let circle = "";
  let isDown = false;
  let origX = 0;
  let origY = 0;

  circDrawDown = o => {
    const pointer = canvas.getPointer(o.e);
    isDown = true;
    origX = pointer.x;
    origY = pointer.y;
    circle = new fabric.Circle({
      left: pointer.x,
      top: pointer.y,
      radius: 1,
      strokeWidth: strWid,
      fill: fillCol,
      stroke: strCol,
      selectable: false,
      originX: "center",
      originY: "center"
    });
    canvas.add(circle);
  };

  circDrawMove = o => {
    if (!isDown) return;
    const pointer = canvas.getPointer(o.e);
    circle.set({
      radius:
        Math.abs(Math.abs(origX - pointer.x) + Math.abs(origY - pointer.y)) /
        1.5
    });
    canvas.renderAll();
  };

  circDrawUp = o => {
    isDown = false;
  };

  return (
    canvas.on("mouse:down", circDrawDown),
    canvas.on("mouse:move", circDrawMove),
    canvas.on("mouse:up", circDrawUp)
  );
};
