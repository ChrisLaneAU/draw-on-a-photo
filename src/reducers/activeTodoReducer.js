import { ACTIVE_TODO } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case ACTIVE_TODO:
      return action.payload;
    default:
      return state;
  }
};
