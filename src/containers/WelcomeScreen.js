import { getGameConfigs, loadPlayers, fetchCards } from "../actions";
import { connect } from "react-redux";
import WelcomeScreen from "../components/WelcomeScreen";

const mapStateToProps = state => {
  return {
    deck: state.deck,
    configs: state.configs,
    player: state.player
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    getGameConfigs: (name, playerCount, status) =>
      dispatch(getGameConfigs(name, playerCount, status)),
    loadPlayers: (deck_id, name, id) => dispatch(loadPlayers(deck_id, name, id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
