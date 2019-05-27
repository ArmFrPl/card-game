import { fetchCards, getGameConfigs, loadPlayers } from "../actions";
import { connect } from "react-redux";
import Game from "../components/Game";
// import {RENDER_PLAYERS} from "../actions/types";
// import cardsApi from "../apis/cardsApi";

// const renderPlayers = async (configs, deck) => {
//   let names = ['Bob', 'Mike', 'Eric', 'Gary'];
//   for (let i = 0; i < configs.playerCount-1; i++) {
//     // const hand = await cardsApi.get(`/${deck_id}/draw/?count=10`);
//     console.log(loadPlayers(deck.deck_id, names[i], i+1))
//     loadPlayers(deck.deck_id, names[i], i);
//   }
//   return {type: RENDER_PLAYERS, payload: {}}
// }

const mapStateToProps = state => ({
  deck: state.deck,
  player: state.player,
  configs: state.configs,
  game: state.game
});

const mapDispatchToProps = dispatch => ({
  // selectCard: (card) => dispatch(selectCard(card)),
  fetchCards: () => dispatch(fetchCards()),
  loadPlayers: (deck_id, name, id) => dispatch(loadPlayers(deck_id, name, id)),
  getGameConfigs: status => dispatch(getGameConfigs(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
