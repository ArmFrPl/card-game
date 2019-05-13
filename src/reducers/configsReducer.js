import {CONFIGS} from "../actions/types";

const DEFAULT_STATE = {
  playerCount: 0,
  name: '',
  status: 'gettingConfigs'
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === CONFIGS) {
    return action.payload
  }
  return state;
}