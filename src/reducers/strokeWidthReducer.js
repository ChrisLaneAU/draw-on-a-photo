import { SET_STROKE_WIDTH } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_STROKE_WIDTH:
      return action.payload;
    default:
      return state;
  }
};
