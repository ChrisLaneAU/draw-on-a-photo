import { IMAGE_IS_SAVING } from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case IMAGE_IS_SAVING:
      return action.payload;
    default:
      return state;
  }
};
