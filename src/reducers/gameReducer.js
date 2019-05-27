import {GET_SELECTED_CARD, CHANGE_TURN_TO_START} from "../actions/types";

const DEFAULT_STATE = {
  cardsOnTable: [],
  currentPlayerId: 0
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
      ...state.cardsOnTable,
      currentPlayerId: action.payload
    }
  }
  return state;
}