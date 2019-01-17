import { SHOW_MODAL } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return action.payload;
    default:
      return state;
  }
};
