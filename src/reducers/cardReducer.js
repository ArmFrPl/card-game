import {FETCH_CARDS} from "../actions/types";

export default (state = [], action) => {

  if (action.type === FETCH_CARDS) {
    return action.payload.data
  }
  return state;
}
