import React from "react";
import { connect } from "react-redux";
import { fetchCards, drawCards} from "../actions";
import PlayerHands from './PlayerHands';

class Game extends React.Component {

  componentDidMount() {
    this.props.fetchCards();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.draw === this.props.draw){
      for (let i = 0; i<this.props.match.params.playerCount; i++){
        this.props.drawCards(this.props.deck.deck_id)
      }
    }
  }

  render() {
    return (
      <div>
        <PlayerHands hands={this.props.draw.hands}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    deck: state.deck,
    draw: state.draw
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchCards: () => dispatch(fetchCards()),
    drawCards: (deck_id) => dispatch(drawCards(deck_id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Game);
