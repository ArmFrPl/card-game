import React from "react";
import PlayerHands from "./PlayerHands";
import Spinner from "../spinner";

class Game extends React.Component {

  componentDidMount() {
    this.initGame();
  }

  initGame() {
    this.props.fetchCards();
  }

  render() {
    // console.log(this.props)
    return this.props.player.hand ? (
      <div>
        <PlayerHands hands={this.props.player.hand.data.cards} id={this.props.player.id}/>
      </div>
    ) : <Spinner />
  }
}

export default Game;

