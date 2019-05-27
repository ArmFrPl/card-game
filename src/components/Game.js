import React from "react";
import Player from "./Player";

class Game extends React.Component {

  componentDidMount() {
    this.renderBots()

  }

  renderBots() {
    let names = ['Bob', 'Mike', 'Eric', 'Gary'];
    for (let i = 0; i < this.props.configs.playerCount-1; i++) {
      this.props.loadPlayers(this.props.deck.deck_id, names[i], i+1);
    }
  }

  renderTableCards() {
    return (
      <div>
        {
          this.props.game.cardsOnTable.map(card => {
            return (
              <div key={card.code} style={{position: 'absolute', left: '51.5%', top: '42.5%'}} id={'cardsOnTable'}>
                <img key={card.code} src={card.image} alt="" style={{width: 92}}/>
              </div>
              )
          })
        }
        {
          this.props.player.players.map(hand => {
            return <Player hand={hand.hand} key={hand.id} id={hand.id} name={hand.name}
                           playerCount={parseInt(this.props.configs.playerCount)}/>
          })
        }
      </div>
    )
  }

  render() {
    if (parseInt(this.props.configs.playerCount) === this.props.player.players.length) {
      return (
        <div>
          {
            this.props.game.cardsOnTable.length ? (this.renderTableCards()) : (
              this.props.player.players.map(hand => {
                return <Player hand={hand.hand} key={hand.id} id={hand.id} name={hand.name}
                               playerCount={parseInt(this.props.configs.playerCount)}/>
              })
            )
          }
        </div>
      );
    }else{
      return null;
    }
  }
}

export default Game;

