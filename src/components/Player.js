import React from 'react';
import {removeSelectedCard, selectCard, changeTurnToStart} from "../actions";
import {connect} from "react-redux";
// import $ from 'jquery';

class Player extends React.Component {

  playersPosition(){
    let positions = [];
    if(parseInt(this.props.playerCount) === 2){
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
          width: 920,
          transform: 'rotate(180deg)'
        }
      ]
    }else if(parseInt(this.props.playerCount) === 3){
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
          width: 920,
          transform: 'rotate(180deg)'
        }
      ]
    }else if(parseInt(this.props.playerCount) === 4){
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
          width: 920,
          transform: 'rotate(180deg)'
        },
        {
          top:'46.5%',
          right: '-14.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 920
        }
      ]
    }else if(parseInt(this.props.playerCount) === 5){
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
          width: 920,
          transform: 'rotate(180deg)'
        },
        {
          top: 0,
          right: '4%',
          position: 'absolute',
          width: 920,
          transform: 'rotate(180deg)'
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
    // let angel = 0;
    // $('#cardsOnTable').css('transform', 'rotate(' + (angel + 22.5) +'deg)');
  }

  render() {
    const {playerCount} = this.props.configs;
    const {currentPlayerId} = this.props.game;

    if(currentPlayerId > playerCount-1) {
      this.props.changeTurnToStart(currentPlayerId)
    }

    return(
      <div style={this.playersPosition()[this.props.id]}>
        <h3>{this.props.name}</h3>
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
  configs: state.configs
});

const mapDispatchToProps = dispatch => ({
  selectCard: (card, currentPlayerId) => {dispatch(selectCard(card, currentPlayerId))},
  removeSelectedCard: (card) => {dispatch(removeSelectedCard(card))},
  changeTurnToStart: (currentPlayerId) => {dispatch(changeTurnToStart(currentPlayerId))}
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);