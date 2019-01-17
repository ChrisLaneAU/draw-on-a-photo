export const strokeWidth = (canvas, strWid, status) => {
  if (status === "off") return;
  const selected = canvas.getActiveObjects();
  selected.forEach(object => {
    object.set("strokeWidth", strWid);
  });
  canvas.freeDrawingBrush.width = strWid;
  canvas.renderAll();
};
