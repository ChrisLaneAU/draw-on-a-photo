import { SHOW_POPUP } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_POPUP:
      return action.payload;
    default:
      return state;
  }
};
