const storeStructure = {
  toDoItemsData: {
    id: {
      coOrds: "",
      done: false,
      img: "",
      imgOrig: "",
      title: ""
    }
  },
  img: "",
  loadingOverlay: {
    saveImgOverlay: false
  },
  modalVisible: false,
  canvas: {},
  activeTodo: {
    coOrds: "",
    done: false,
    id: "",
    img: "",
    imgOrig: "",
    title: ""
  },
  canvasActiveId: "",
  activeEditModeId: "",
  popupData: {
    show: false,
    offsetX: 0,
    offsetY: 0,
    width: 0
  },
  strokeColour: "#ff0000",
  fillColour: "transparent",
  strokeWidth: 5
};
