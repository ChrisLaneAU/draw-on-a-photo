import { SET_POPUP_DATA } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_POPUP_DATA:
      const idsWithPopup = [...state.idsWithPopup, action.payload.idsWithPopup];
      return { ...action.payload, idsWithPopup };
    default:
      return state;
  }
};
