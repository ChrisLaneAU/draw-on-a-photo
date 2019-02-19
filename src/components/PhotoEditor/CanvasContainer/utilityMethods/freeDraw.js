export const freeDraw = (canvas, col, strWid, status) => {
  if (status === "off") return;
  canvas.discardActiveObject().renderAll();
  canvas.isDrawingMode = true;
  canvas.freeDrawingBrush.color = col;
  canvas.freeDrawingBrush.width = strWid;
};
