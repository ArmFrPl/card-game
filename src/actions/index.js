import cardsApi from '../apis/cardsApi';
import {FETCH_CARDS, GET_CONFIGS, PASS_PLAYERS_CARDS, RENDER_PLAYERS} from "./types";

export const fetchCards = async () => {
  const request = await cardsApi.get('/new/shuffle/?deck_count=1');

  return({type: FETCH_CARDS, payload: request});
};

export const loadPlayers = async (name, id) => {

  return({type: RENDER_PLAYERS, payload: {name, id}});
};

export const getPlayersHands = async (deck_id) => {
  const hand = await cardsApi.get(`/${deck_id}/draw/?count=10`);

  return ({type: PASS_PLAYERS_CARDS, payload: hand})
}

export const getGameConfigs = (name, playerCount, status) => {

  return({type: GET_CONFIGS, payload: {name, playerCount, status}})

};
// export const game = (cardsOnTable, currentPlayerId, status) => {
//
//   return({type: GAME, payload: {cardsOnTable, currentPlayerId, status}})
//
// };