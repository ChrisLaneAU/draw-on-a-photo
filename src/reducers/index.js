import { combineReducers } from "redux";

import data from "./dataReducer";
import img from "./imgReducer";
import loadingOverlay from "./loadingOverlayReducer";
import modalVisible from "./showModalReducer";
import canvas from "./canvasReducer";
import activeTodo from "./activeTodoReducer";
import canvasActiveId from "./canvasActiveIdReducer";
import activeEditModeId from "./activeEditModeReducer";
import popupData from "./showPopupReducer";
import strokeColour from "./strokeColourReducer";
import fillColour from "./fillColourReducer";
import strokeWidth from "./strokeWidthReducer";

export default combineReducers({
  data,
  img,
  loadingOverlay,
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
