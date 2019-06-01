import {
  changeScore,
  fetchCards,
  getGameConfigs,
  loadPlayers,
  emptyCardsOnTable,
  restartGame,
  emptyPlayers
} from "../actions";
import { connect } from "react-redux";
import Game from "../components/Game";

const mapStateToProps = state => ({
  deck: state.deck,
  player: state.player,
  configs: state.configs,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  emptyPlayers: () => dispatch(emptyPlayers()),
  restartGame: () => dispatch(restartGame()),
  emptyCardsOnTable: (cardsOnTable, scoreFromTable) => dispatch(emptyCardsOnTable(cardsOnTable, scoreFromTable)),
  fetchCards: () => dispatch(fetchCards()),
  loadPlayers: (deck_id, name, id) => dispatch(loadPlayers(deck_id, name, id)),
  changeScore: (score, scoreOnTable, id) => dispatch(changeScore(score, scoreOnTable, id)),
  getGameConfigs: status => dispatch(getGameConfigs(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
