import React from "react";
import Player from './Player'

class PlayerHands extends React.Component {
  playersPosition(){
    let positions = {};
    if(this.props.hands.length === 2){
      positions = {
        '0': {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        '1': {
          top: 0,
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        }
      }
    }else if(this.props.hands.length === 3){
      positions = {
        '0': {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        '1': {
          top: '0',
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        '2': {
          top:'46.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        }
      }
    }else if(this.props.hands.length === 4){
      positions = {
        '0': {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        '1': {
          top: 0,
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        '2': {
          top:'46.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        },
        '3': {
          top:'33.5%',
          right: '-13.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 500
        }
      }
    }else if(this.props.hands.length === 5){
      positions = {
        '0': {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
         },
        '1': {
          top: 0,
          left: 0,
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        2: {
          top:'56.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        },
        '3': {
          top:'43.5%',
          right: '-13.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 500
        },
        '4': {
          top: 0,
          right: '7%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        }
      }
    }
    return positions;
  }

  render() {
    return(
      <div>
        <Player hand={this.props.hands} style={this.playersPosition()} id={this.props.id}/>
      </div>
    )
  }
}

export default PlayerHands;