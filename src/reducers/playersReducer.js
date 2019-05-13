import {PLAYERS} from "../actions/types";

const DEFAULT_STATE = {
  name: '',
  id: 0,
  score: 0,
  hands: []
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === PLAYERS) {
    return action.payload;
  }
  return state;
}