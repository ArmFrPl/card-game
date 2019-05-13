import {GET_CONFIGS} from "../actions/types";

const DEFAULT_STATE = {
  playerCount: 0,
  name: '',
  status: 'gettingConfigs'
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_CONFIGS) {
    return action.payload
  }
  return state;
}