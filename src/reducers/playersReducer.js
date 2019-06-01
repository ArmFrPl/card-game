import {
  REMOVE_SELECTED_CARD,
  RENDER_PLAYERS,
  CHANGE_SCORE,
  EMPTY_PLAYERS
} from "../actions/types";

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
  }else if(action.type === CHANGE_SCORE){
    return {
      ...state,
      players: [...state.players.map(el => {
        if(el.id === action.payload.id){
          return { ...el, score: action.payload.score }
        }else {
          return el;
        }
      })]
    }
  }else if(action.type === EMPTY_PLAYERS){
    return {
      players: action.payload.players
    }
  }
  return state;
}