import { SAVE_IMG } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SAVE_IMG:
      return action.payload;
    default:
      return state;
  }
};
