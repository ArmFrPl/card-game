import {RENDER_PLAYERS} from "../actions/types";

const DEFAULT_STATE = {
  name: '',
  id: 0,
  score: 0,
  hand: []
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === RENDER_PLAYERS) {
    return action.payload;
  }
  return state;
}