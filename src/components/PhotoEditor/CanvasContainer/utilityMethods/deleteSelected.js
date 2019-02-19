export const deleteSelected = (canvas, status) => {
  if (status === "off") return;
  const selected = canvas.getActiveObjects();
  canvas.remove(...selected);
  canvas.discardActiveObject().renderAll();
};
