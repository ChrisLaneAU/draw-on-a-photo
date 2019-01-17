import { combineReducers } from "redux";

import data from "./dataReducer";
import img from "./imgReducer";
import modalVisible from "./showModalReducer";
import activeTodo from "./activeTodoReducer";
import canvasActiveId from "./canvasReducer";
import activeEditModeId from "./activeEditModeReducer";
import popupData from "./showPopupReducer";
import strokeColour from "./strokeColourReducer";
import fillColour from "./fillColourReducer";
import strokeWidth from "./strokeWidthReducer";

export default combineReducers({
  data,
  img,
  modalVisible,
  activeTodo,
  canvasActiveId,
  activeEditModeId,
  popupData,
  strokeColour,
  fillColour,
  strokeWidth
});
