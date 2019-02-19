export const clearAll = (canvas, status) => {
  if (status === "off") return;
  const objs = canvas.getObjects().map(function(o) {
    return o.set("active", true);
  });
  objs.forEach(function(object) {
    canvas.remove(object);
  });
  canvas.discardActiveObject().renderAll();
};
