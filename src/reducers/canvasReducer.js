import { CANVAS_OBJECT } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case CANVAS_OBJECT:
      return action.payload;
    default:
      return state;
  }
};
