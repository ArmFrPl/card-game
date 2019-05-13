import {fetchCards, getGameConfigs, loadPlayers} from "../actions";
import {connect} from "react-redux";
import Game from "../components/Game";

const mapStateToProps = state => {
  return {
    deck: state.deck,
    player: state.players,
    configs: state.configs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    players: (deck_id, name, id) => dispatch(loadPlayers(deck_id, name, id)),
    gameConfigs: (status) => dispatch(getGameConfigs(status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);