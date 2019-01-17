import {
  todosRef,
  imagesRef,
  storageRef,
  newFirebaseId
} from "../config/firebase";
import {
  FETCH_TODOS,
  FETCH_IMG,
  SHOW_MODAL,
  ACTIVE_TODO,
  CANVAS_MODE,
  SET_ACTIVE_EDIT_MODE,
  SHOW_POPUP,
  SET_STROKE_COLOUR,
  SET_FILL_COLOUR,
  SET_STROKE_WIDTH
} from "./types";

export const addToDo = newToDo => async dispatch => {
  storageRef
    .child(newToDo.img)
    .getDownloadURL()
    .then(url => {
      newToDo.img = url;
      todosRef.push().set(newToDo);
    });
};

export const addImg = newImg => async dispatch => {
  storageRef
    .child(newFirebaseId)
    .put(newImg)
    .then(snapshot => {
      console.log("image has been uploaded");
    });
};

export const toggleDone = (todoId, status) => async dispatch => {
  todosRef.child(todoId).update({ done: status });
};

export const completeToDo = completeToDoId => async dispatch => {
  todosRef.child(completeToDoId).remove();
  imagesRef.child(completeToDoId).remove();
};

export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};

export const saveImg = (imgPath, id, coOrds) => async dispatch => {
  storageRef
    .child(`${newFirebaseId}.jpg`)
    .putString(imgPath, "data_url")
    .then(snapshot => {
      storageRef
        .child(`${newFirebaseId}.jpg`)
        .getDownloadURL()
        .then(url => {
          todosRef.child(id).update({ img: url, coOrds: coOrds });
        });
      console.log("image has been uploaded");
    });
};

export const showModal = show => dispatch => {
  dispatch({
    type: SHOW_MODAL,
    payload: show
  });
};

export const setActiveTodo = activeTodo => dispatch => {
  dispatch({
    type: ACTIVE_TODO,
    payload: activeTodo
  });
};

export const setCanvasMode = (
  activeId,
  prevId,
  offsetX,
  offsetY,
  width
) => dispatch => {
  dispatch({
    type: CANVAS_MODE,
    payload: {
      activeModeId: activeId,
      prevModeId: prevId,
      offsetX: offsetX,
      offsetY: offsetY,
      width: width
    }
  });
};

export const setActiveEditMode = activeEditModeId => dispatch => {
  dispatch({
    type: SET_ACTIVE_EDIT_MODE,
    payload: activeEditModeId
  });
};

export const showPopup = (show, element) => dispatch => {
  let payload = [show];
  if (element) {
    const bodyRect = document
        .querySelector(".modal__window")
        .getBoundingClientRect(),
      elemRect = element.getBoundingClientRect(),
      offsetX = Math.floor(elemRect.left - bodyRect.left),
      offsetY = Math.floor(elemRect.top - bodyRect.top),
      width = Math.floor(elemRect.width);
    payload = { show, offsetX, offsetY, width };
  }
  const popup = document.querySelector(".popup-container");
  if (popup) {
    popup.classList.toggle("popup-container--hide");
  }
  dispatch({
    type: SHOW_POPUP,
    payload: payload
  });
};

export const setStrokeColour = strokeColour => dispatch => {
  dispatch({
    type: SET_STROKE_COLOUR,
    payload: strokeColour
  });
};

export const setFillColour = fillColour => dispatch => {
  dispatch({
    type: SET_FILL_COLOUR,
    payload: fillColour
  });
};

export const setStrokeWidth = strokeWidth => dispatch => {
  dispatch({
    type: SET_STROKE_WIDTH,
    payload: strokeWidth - 0
  });
};
