import { SET_ACTIVE_EDIT_MODE } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_ACTIVE_EDIT_MODE:
      return action.payload;
    default:
      return state;
  }
};
