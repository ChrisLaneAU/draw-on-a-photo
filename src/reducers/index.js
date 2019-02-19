import { combineReducers } from "redux";

import toDoItemsData from "./fetchToDoItemsReducer";
import img from "./imgReducer";
import imageIsSaving from "./imageIsSavingReducer";
import modalVisible from "./showModalReducer";
import canvas from "./canvasReducer";
import activeTodo from "./activeTodoReducer";
import canvasActiveId from "./canvasActiveIdReducer";
import activeEditModeId from "./activeEditModeReducer";
import popupData from "./setPopupDataReducer";
import strokeColour from "./strokeColourReducer";
import fillColour from "./fillColourReducer";
import strokeWidth from "./strokeWidthReducer";

export default combineReducers({
  toDoItemsData,
  img,
  imageIsSaving,
  modalVisible,
  canvas,
  activeTodo,
  canvasActiveId,
  activeEditModeId,
  popupData,
  strokeColour,
  fillColour,
  strokeWidth
});
