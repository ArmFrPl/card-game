import React from "react";
import Player from "./Player";

const imageCards = {
  JACK: 11,
  QUEEN: 12,
  KING: 13,
  ACE: 1
};

class Game extends React.Component {

  componentDidMount() {
    this.renderBots()
  }

  renderBots() {
    let names = ['Bob', 'Mike', 'Eric', 'Gary'];
    for (let i = 0; i < this.props.configs.playerCount - 1; i++) {
      this.props.loadPlayers(this.props.deck.deck_id, names[i], i + 1);
    }
  }

  calculateScore(score, scoreOnTable) {
    let {cardsOnTable} = this.props.game;

    let arr = [];
    for(let i = 0; i < cardsOnTable.length; i++){
      const val = !isNaN(cardsOnTable[i].value)
        ? +cardsOnTable[i].value
        : this.parseImgToNumber(cardsOnTable[i].value);
      arr.push(val);
    }
    const max = Math.max(...arr);
    const id = arr.indexOf(max);
    scoreOnTable = this.getScoreOnTable(arr);
    return {score, id, scoreOnTable}
  };

  getScoreOnTable(arr) {
    let sum = 0;
    if(arr.length === +this.props.configs.playerCount){
      arr.map(item => {
        sum += item;
      });
    }
    return sum;
  }

  parseImgToNumber(img) {
    return imageCards[img]
  }

  renderPlayerHands(){

    const {players} = this.props.player;
    if(!players[players.length-1].hand.length){
      return this.renderWinner(players);
    }

    return this.props.game.cardsOnTable.length ? (this.renderTableCards()) : (
      this.props.player.players.map(player => {

          return <Player hand={player.hand} key={player.id} id={player.id} name={player.name} score={player.score}
                         playerCount={+this.props.configs.playerCount} />
      })
    )
  }

  handleRestart = () => {
    this.props.restartGame();
    this.props.emptyPlayers();
  };

  renderWinner(players) {
    const len = players.length;
    let scores = [];
    let winnerId;

    for (let c = 0; c < len; c++) {
      const player = players[c];
      scores.push(player.score)
      let highest = Math.max(...scores);
      winnerId = scores.indexOf(highest);
    }
    const winner = players.find(el => el.id === winnerId)
    return (
      <div key={Math.random()} style={{fontSize: '85px', position: 'absolute', top: '42%', left:'35%'}}>
        <p>The Winner Is: {winner.name}</p>
        <button onClick={this.handleRestart} className='ui button primary' id='restart' >Restart Game</button>
      </div>
    )
  }
  renderTableCards() {
    return (
      <div>
        {
          this.props.game.cardsOnTable.map(card => {
            return (
              <div key={Math.random()} style={{position: 'absolute', left: '51.5%', top: '42.5%'}} id={'cardsOnTable'}>
                <img src={card.image} alt="" style={{width: 92}}/>
              </div>
              )
          })
        }
        {
          this.props.player.players.map(player => {

            if(this.props.game.cardsOnTable.length === +this.props.configs.playerCount && this.props.game.currentPlayerId === 0){
              let calculatedScore = this.calculateScore(player.score, this.props.game.scoreOnTable);

                setTimeout(() => {
                  if (player.id === calculatedScore.id) {
                    this.props.changeScore(calculatedScore.score, calculatedScore.scoreOnTable, calculatedScore.id);
                    this.props.emptyCardsOnTable(this.props.game.cardsOnTable, this.props.game.scoreOnTable);
                  }
                }, 500);
            }
            return <Player hand={player.hand} key={player.id} id={player.id} name={player.name} score={player.score}
                           playerCount={+this.props.configs.playerCount}/>
          })
        }
      </div>
    )
  }


  render() {
   if (+this.props.configs.playerCount === this.props.player.players.length) {
      return (
        <div>
          {
            this.renderPlayerHands()
          }
        </div>
      );
    }else{
      return null;
    }
  }
}

export default Game;

