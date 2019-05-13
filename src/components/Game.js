import React from "react";
import PlayerHands from "./PlayerHands";
import Spinner from "../spinner";

class Game extends React.Component {

  componentDidMount() {
    this.initGame();
  }

  initGame() {
    this.props.fetchCards();
    // this.props.configs();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.deck !== this.props.deck){
      for (let i = 0; i<this.props.configs.playerCount; i++){
        this.props.players(this.props.deck.deck_id, this.props.configs.name, i);
      }
    }
  }

  render() {
    return this.props.player.hand ? (
      <div>
        <PlayerHands hands={this.props.player.hand.data.cards} id={this.props.player.id}/>
      </div>
    ) : <Spinner />
  }
}

export default Game;

