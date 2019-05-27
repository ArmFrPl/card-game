import cardsApi from '../apis/cardsApi';
import {FETCH_CARDS, GET_CONFIGS, RENDER_PLAYERS, GET_SELECTED_CARD,REMOVE_SELECTED_CARD, CHANGE_TURN_TO_START} from "./types";

export const fetchCards = async () => {
  const request = await cardsApi.get('/new/shuffle/?deck_count=1');

  return({type: FETCH_CARDS, payload: request});
};

export const loadPlayers = async (deck_id, name, id) => {
  const hand = await cardsApi.get(`/${deck_id}/draw/?count=10`);

  return({type: RENDER_PLAYERS, payload: {name, id, hand: hand.data.cards}});
};

export const getGameConfigs = (name, playerCount, status) => {

  return({type: GET_CONFIGS, payload: {name, playerCount, status}})

};

export const selectCard = (card, currentPlayerId) => {

  currentPlayerId += 1;

  return ({type: GET_SELECTED_CARD, payload: {card, currentPlayerId}})
};

export const removeSelectedCard = (card) => {

  return ({type: REMOVE_SELECTED_CARD, card})
};

export const changeTurnToStart = (currentPlayerId) => {

  currentPlayerId = 0;

  return ({type: CHANGE_TURN_TO_START, payload: currentPlayerId})
}