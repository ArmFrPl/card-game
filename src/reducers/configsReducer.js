import {GET_CONFIGS, RESTART_GAME} from "../actions/types";

const DEFAULT_STATE = {
  playerCount: 0,
  name: '',
  status: 'gettingConfigs'
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_CONFIGS) {
    return action.payload
  }else if(action.type === RESTART_GAME){
    console.log(action.payload)
    return {
      ...state,
      status: action.payload
    }
  }
  return state;
}