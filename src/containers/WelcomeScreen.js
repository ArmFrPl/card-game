import {getGameConfigs, loadPlayers, fetchCards, emptyPlayers, emptyCardsOnTable} from "../actions";
import { connect } from "react-redux";
import WelcomeScreen2 from "../components/WelcomeScreen";

const mapStateToProps = state => {
  return {
    deck: state.deck,
    configs: state.configs,
    player: state.player,
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return {
    emptyPlayers: () => dispatch(emptyPlayers()),
    emptyCardsOnTable: (cardsOnTable, scoreFromTable) => dispatch(emptyCardsOnTable(cardsOnTable, scoreFromTable)),
    fetchCards: () => dispatch(fetchCards()),
    getGameConfigs: (name, playerCount, status) =>
      dispatch(getGameConfigs(name, playerCount, status)),
    loadPlayers: (deck_id, name, id) => dispatch(loadPlayers(deck_id, name, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen2);
