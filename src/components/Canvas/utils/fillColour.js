export const fillColour = (canvas, colour, status) => {
  if (status === "off") return;
  const selected = canvas.getActiveObjects();
  selected.forEach(object => {
    object.set("fill", colour);
  });
  canvas.renderAll();
};
