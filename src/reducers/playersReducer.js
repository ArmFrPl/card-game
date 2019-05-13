import {RENDER_PLAYERS} from "../actions/types";

const DEFAULT_STATE = {
  players: {}
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === RENDER_PLAYERS) {
    return {...action.payload};
  }
  return state;
}