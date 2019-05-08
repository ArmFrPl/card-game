import cardsApi from '../apis/cardsApi';
import {DRAW_CARDS, FETCH_CARDS, TURN} from "./types";

export const fetchCards = () => {
  const request = cardsApi.get('/new/shuffle/?deck_count=1');

  return({type: FETCH_CARDS, payload: request});
};

export const drawCards = async (deck_id) => {
  const request = await cardsApi.get(`/${deck_id}/draw/?count=10`);

  return({type: DRAW_CARDS, payload: request});
};

export const turn = (playerId, code) => {


  return({type: TURN, payload: playerId})
}