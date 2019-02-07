import { LOADING_OVERLAY } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case LOADING_OVERLAY:
      return action.payload;
    default:
      return state;
  }
};
