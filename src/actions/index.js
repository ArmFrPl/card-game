import cardsApi from '../apis/cardsApi';
import {
  FETCH_CARDS,
  GET_CONFIGS,
  RENDER_PLAYERS,
  GET_SELECTED_CARD,
  REMOVE_SELECTED_CARD,
  CHANGE_TURN_TO_START,
  CHANGE_SCORE,
  EMPTY_CARDS_ON_TABLE,
  RESTART_GAME,
  EMPTY_PLAYERS,
  IS_SCORE_ADDED,
  IS_PLAYED
} from "./types";

export const fetchCards = async () => {
  const request = await cardsApi.get('/new/shuffle/?deck_count=1');

  return({type: FETCH_CARDS, payload: request});
};

export const loadPlayers = async (deck_id, name, id, score = 0) => {
  const hand = await cardsApi.get(`/${deck_id}/draw/?count=5`);

  return({type: RENDER_PLAYERS, payload: {name, id, hand: hand.data.cards, score}});
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

export const startTurnAgain = (currentPlayerId) => {

  currentPlayerId = 0;

  return ({type: CHANGE_TURN_TO_START, payload: currentPlayerId})
};

export const changeScore = (score, scoreFromTable, id) => {

  score += scoreFromTable;

  return ({type: CHANGE_SCORE, payload: {score, id}})
};

export const emptyCardsOnTable = (cardsOnTable, scoreFromTable ) => {

  cardsOnTable = [];
  scoreFromTable = 0;

  return ({type: EMPTY_CARDS_ON_TABLE, payload: {cardsOnTable, scoreFromTable}})
};

export const restartGame = () => {

  const status = 'gettingConfigs';

  return {type: RESTART_GAME, payload: status}
};

export const emptyPlayers = () => {

  const players = [];
  const scoreOnTable = 0;

  return {type: EMPTY_PLAYERS, payload: {players, scoreOnTable}}
};

export const isPlayed = (isPlayed) => {

  return {type: IS_PLAYED, payload: isPlayed}
};
export const isScoreAdded = (isAdded) => {

  return {type: IS_SCORE_ADDED, payload: isAdded}
};