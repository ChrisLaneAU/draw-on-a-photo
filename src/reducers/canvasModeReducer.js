import { SET_CANVAS_MODE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_CANVAS_MODE:
      return action.payload;
    default:
      return state;
  }
};
