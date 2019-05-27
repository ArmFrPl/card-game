import {REMOVE_SELECTED_CARD, RENDER_PLAYERS} from "../actions/types";

const DEFAULT_STATE = {
  players: []
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === RENDER_PLAYERS) {
    return {
      ...state,
      players: [
        ...state.players,
        action.payload
      ]
    };
  }else if(action.type === REMOVE_SELECTED_CARD){
    return {
      ...state,
      players: [...state.players.map(el => {
        return {...el, hand: el.hand.filter(val => val.code !== action.card.code)}
      })]
    }
  }
  return state;
}