import {
  GET_SELECTED_CARD,
  CHANGE_TURN_TO_START,
  EMPTY_CARDS_ON_TABLE,
  EMPTY_PLAYERS,
  IS_SCORE_ADDED,
  IS_PLAYED
} from "../actions/types";

const DEFAULT_STATE = {
  cardsOnTable: [],
  currentPlayerId: 0,
  scoreOnTable: 0,
  isPlayed: false,
  isAdded: false
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_SELECTED_CARD) {

    return {
      ...state,
      cardsOnTable: [
        ...state.cardsOnTable,
        action.payload.card
      ],
      currentPlayerId: action.payload.currentPlayerId
    };
  }else if (action.type === CHANGE_TURN_TO_START){
    return {
      ...state,
      currentPlayerId: action.payload
    }
  }else if(action.type === EMPTY_CARDS_ON_TABLE ){
    return {
      ...state,
      cardsOnTable: action.payload.cardsOnTable,
      scoreOnTable: action.payload.scoreOnTable
    }
  }else if(action.type === EMPTY_PLAYERS){
    return {
      ...state,
      scoreOnTable: action.payload.scoreOnTable
    }
  }else if(action.type === IS_PLAYED){
    return {
      ...state,
      isPlayed: action.payload
    }
  }else if(action.type === IS_SCORE_ADDED){
    return {
      ...state,
      isAdded: action.payload
    }
  }
  return state;
}