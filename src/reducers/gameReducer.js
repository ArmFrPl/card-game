import {GAME} from "../actions/types";

const DEFAULT_STATE = {
  cardsOnTable: [],
  currentPlayerId: 0,
  status: ''
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GAME) {
    return action.payload;
  }
  return state;
}