import { SET_FILL_COLOUR } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SET_FILL_COLOUR:
      return action.payload;
    default:
      return state;
  }
};
