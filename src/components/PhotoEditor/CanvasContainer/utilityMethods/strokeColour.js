export const strokeColour = (canvas, colour, status) => {
  if (status === "off") return;
  canvas.freeDrawingBrush.color = colour;
  const selected = canvas.getActiveObjects();
  selected.forEach(object => {
    object.set("stroke", colour);
  });
  canvas.renderAll();
};
