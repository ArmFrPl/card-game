import {fetchCards, getGameConfigs, loadPlayers} from "../actions";
import {connect} from "react-redux";
import Game from "../components/Game";

const renderPlayers = () => {
  // return (dispatch, getState) => {
  //   dispatch(updateAttributeSelection('genre', newValue));
  //   let state = getState();
  //   // do some logic based on state, and then:
  //   dispatch(getTableData(newValue, currentYear));
  // }
  for (let i = 0; i < this.props.configs.playerCount; i++) {
    this.props.players(this.props.deck.deck_id, this.props.configs.name, i);
  }
}



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