import React from 'react';
import {removeSelectedCard, selectCard, startTurnAgain} from "../actions";
import {connect} from "react-redux";

class Player extends React.Component {

  playersPosition(){
    let positions = [];
    if(+this.props.playerCount === 2){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        },
        {
          top: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        }
      ]
    }else if(+this.props.playerCount === 3){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        },
        {
          top:'46.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 920
        },
        {
          top: '0',
          left: '29.5%',
          position: 'absolute',
          width: 920
        }
      ]
    }else if(+this.props.playerCount === 4){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        },
        {
          top:'46.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 920
        },
        {
          top: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        },
        {
          top:'46.5%',
          right: '-14.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 920
        }
      ]
    }else if(+this.props.playerCount=== 5){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 920
        },
        {
          top:'47.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 920
        },
        {
          top: 0,
          left: '4%',
          position: 'absolute',
          width: 920
        },
        {
          top: 0,
          right: '4%',
          position: 'absolute',
          width: 920
        },
        {
          top:'47.5%',
          right: '-14.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 920
        }
      ]
    }
    return positions;
  }

  cardClickHandler(card) {
    const {id} = this.props;
    const {currentPlayerId} = this.props.game;
    if (id === currentPlayerId) {
      this.props.selectCard(card, currentPlayerId);
      this.props.removeSelectedCard(card)
    }
  }

  botPlay(){
    let currentPlayer;
    const {currentPlayerId} = this.props.game;

    currentPlayer = this.props.player.players.find(curPlay =>  curPlay.id === this.props.game.currentPlayerId)
    let randomNum = Math.floor(Math.random() * this.props.player.players[currentPlayer.id].hand.length);
    setTimeout(() => {
      console.log(currentPlayer.id+1, this.props.game.cardsOnTable.length)
      if(currentPlayer.hand){
        this.props.selectCard(currentPlayer.hand[randomNum], currentPlayerId);
        this.props.removeSelectedCard(currentPlayer.hand[randomNum])
      }
    }, 1000)
  }

  render() {
    const {playerCount} = this.props.configs;
    const {currentPlayerId} = this.props.game;

    if(currentPlayerId > +playerCount-1) {
      this.props.changeTurnToStart(currentPlayerId)
    } else if(currentPlayerId !== 0 && currentPlayerId < +playerCount ){
      this.botPlay()
    }

    return(
      <div style={this.playersPosition()[this.props.id]}>
        <h3>{this.props.name}</h3>
        <h3>Score:{this.props.score}</h3>
        {
          Object.values(this.props.hand).map(card =>
            <img key={card.code} src={card.image} alt="" style={{width: 92}} onClick={() => this.cardClickHandler(card)} />
          )
        }
      </div>
    )
  }
}


const mapStateToProps = state => ({
  game: state.game,
  configs: state.configs,
  player: state.player
});

const mapDispatchToProps = dispatch => ({
  selectCard: (card, currentPlayerId) => {dispatch(selectCard(card, currentPlayerId))},
  removeSelectedCard: (card) => {dispatch(removeSelectedCard(card))},
  changeTurnToStart: (currentPlayerId) => {dispatch(startTurnAgain(currentPlayerId))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);