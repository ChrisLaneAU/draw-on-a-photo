import { SET_STROKE_COLOUR } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STROKE_COLOUR:
      return action.payload;
    default:
      return state;
  }
};
