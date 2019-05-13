import cardsApi from '../apis/cardsApi';
import {PLAYERS, FETCH_CARDS, CONFIGS, GAME} from "./types";

export const fetchCards = async () => {
  const request = await cardsApi.get('/new/shuffle/?deck_count=1');

  return({type: FETCH_CARDS, payload: request});
};

export const loadPlayers = async (deck_id, name, id) => {
  const hand = await cardsApi.get(`/${deck_id}/draw/?count=10`);

  return({type: PLAYERS, payload: {hand, name, id}});
};

export const getGameConfigs = (name, playerCount, status) => {

  return({type: CONFIGS, payload: {name, playerCount, status}})

};
export const game = (cardsOnTable, currentPlayerId, status) => {

  return({type: GAME, payload: {cardsOnTable, currentPlayerId, status}})

};