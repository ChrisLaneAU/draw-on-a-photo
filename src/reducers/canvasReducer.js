import { CANVAS_MODE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CANVAS_MODE:
      return action.payload;
    default:
      return state;
  }
};
