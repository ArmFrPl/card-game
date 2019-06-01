import {
  GET_SELECTED_CARD,
  CHANGE_TURN_TO_START,
  EMPTY_CARDS_ON_TABLE, EMPTY_PLAYERS
} from "../actions/types";

const DEFAULT_STATE = {
  cardsOnTable: [],
  currentPlayerId: 0,
  scoreOnTable: 0
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === GET_SELECTED_CARD) {

    return {
      ...state,
      cardsOnTable: [
        ...state.cardsOnTable,
        action.payload.card
      ],
      currentPlayerId: action.payload.currentPlayerId,
      ...state.scoreOnTable
    };
  }else if (action.type === CHANGE_TURN_TO_START){
    return {
      ...state,
      ...state.cardsOnTable,
      currentPlayerId: action.payload,
      ...state.scoreOnTable
    }
  }else if(action.type === EMPTY_CARDS_ON_TABLE ){
    return {
      ...state,
      cardsOnTable: action.payload.cardsOnTable,
      ...state.currentPlayerId,
      scoreOnTable: action.payload.scoreOnTable
    }
  }else if(action.type === EMPTY_PLAYERS){
    return {
      ...state,
      scoreOnTable: action.payload.scoreOnTable
    }
  }
  return state;
}