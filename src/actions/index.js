import {
  todosRef,
  imagesRef,
  storageRef,
  newFirebaseId
} from "../config/firebase";
import {
  FETCH_TODOS,
  IMAGE_IS_SAVING,
  SHOW_MODAL,
  CANVAS_OBJECT,
  ACTIVE_TODO,
  CANVAS_MODE,
  SET_ACTIVE_EDIT_MODE,
  SET_POPUP_DATA,
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

export const setImageIsSaving = imageIsSaving => ({
  type: IMAGE_IS_SAVING,
  payload: imageIsSaving
});

export const saveImg = (imgPath, id, coOrds) => async dispatch => {
  dispatch(setImageIsSaving(true));
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
      dispatch(setImageIsSaving(false));
    });
};

export const showModal = show => ({
  type: SHOW_MODAL,
  payload: show
});

export const setCanvas = canvas => ({
  type: CANVAS_OBJECT,
  payload: canvas
});

export const setActiveTodo = activeTodo => ({
  type: ACTIVE_TODO,
  payload: activeTodo
});

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

export const setActiveEditMode = activeEditModeId => ({
  type: SET_ACTIVE_EDIT_MODE,
  payload: activeEditModeId
});

export const setPopupData = (show, element, idsWithPopup) => dispatch => {
  let payloadWithElement;
  if (element) {
    const bodyRect = document
        .querySelector(".modal__window")
        .getBoundingClientRect(),
      elemRect = element.getBoundingClientRect(),
      offsetX = Math.floor(elemRect.left - bodyRect.left),
      offsetY = Math.floor(elemRect.top - bodyRect.top),
      width = Math.floor(elemRect.width);
    payloadWithElement = { show, offsetX, offsetY, width, idsWithPopup };
  }
  dispatch({
    type: SET_POPUP_DATA,
    payload: payloadWithElement || { show, idsWithPopup } || { show }
  });
};

export const setStrokeColour = strokeColour => ({
  type: SET_STROKE_COLOUR,
  payload: strokeColour
});

export const setFillColour = fillColour => ({
  type: SET_FILL_COLOUR,
  payload: fillColour
});

export const setStrokeWidth = strokeWidth => ({
  type: SET_STROKE_WIDTH,
  payload: strokeWidth - 0
});
