import {DRAW_CARDS} from "../actions/types";

const DEFAULT_STATE = {
  hands: []
};

export default (state = DEFAULT_STATE, action) => {

  if (action.type === DRAW_CARDS) {
    const result = {
      ...state,
      hands: [
        ...state.hands,
        {...action.payload.data.cards}
      ]
    };
    return result;
  }
  return state;
}