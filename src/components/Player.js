import React from 'react';
import {isPlayed, removeSelectedCard, selectCard, startTurnAgain} from "../actions";
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
          width: 650
        },
        {
          top: 0,
          left: '29.5%',
          position: 'absolute',
          width: 650
        }
      ]
    }else if(+this.props.playerCount === 3){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 650
        },
        {
          top:'46.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 650
        },
        {
          top: '0',
          left: '29.5%',
          position: 'absolute',
          width: 650
        }
      ]
    }else if(+this.props.playerCount === 4){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 650
        },
        {
          top:'60.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 650
        },
        {
          top: 0,
          left: '29.5%',
          position: 'absolute',
          width: 650
        },
        {
          top:'20.5%',
          right: '-14.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 650
        }
      ]
    }else if(+this.props.playerCount=== 5){
      positions = [
        {
          bottom: 0,
          left: '29.5%',
          position: 'absolute',
          width: 650
        },
        {
          top:'60.5%',
          left: '-14.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 650
        },
        {
          top: 0,
          left: '15%',
          position: 'absolute',
          width: 650
        },
        {
          top: 0,
          left: '60%',
          position: 'absolute',
          width: 650
        },
        {
          top:'20.5%',
          right: '-14.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 650
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
      this.props.removeSelectedCard(card);
      this.props.isPlayed(true);
    }
  }

  render() {
    const {playerCount} = this.props.configs;
    const {currentPlayerId} = this.props.game;

    if(currentPlayerId > +playerCount-1) {
      this.props.changeTurnToStart(currentPlayerId)
    }

    return(
      <div style={this.playersPosition()[this.props.id]}>
        <h4>{this.props.name}</h4>
        <h4>Score:{this.props.score}</h4>
        {
          Object.values(this.props.hand).map(card =>
            <img key={card.code} src={card.image} alt="" style={{width: 65}} onClick={() => this.cardClickHandler(card)} />
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
  isPlayed: (isPlay) => {dispatch(isPlayed(isPlay))},
  removeSelectedCard: (card) => {dispatch(removeSelectedCard(card))},
  changeTurnToStart: (currentPlayerId) => {dispatch(startTurnAgain(currentPlayerId))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);