import React from "react";
import Player from './Player'

class PlayerHands extends React.Component {

  playersPosition(){
    let positions = {};
    if(this.props.hands.length === 2){
      positions = {
        player1: {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        player2: {
          top: 0,
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        }
      }
    }else if(this.props.hands.length === 3){
      positions = {
        player1: {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        player2: {
          top: 0,
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        player3: {
          top:'46.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        }
      }
    }else if(this.props.hands.length === 4){
      positions = {
        player1: {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
        },
        player2: {
          top: 0,
          left: '26.5%',
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        player3: {
          top:'46.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        },
        player4: {
          top:'33.5%',
          right: '-13.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 500
        }
      }
    }else if(this.props.hands.length === 5){
      positions = {
        player1: {
          bottom: 0,
          left: '33.5%',
          position: 'absolute',
          width: 500
         },
        player2: {
          top: 0,
          left: 0,
          position: 'absolute',
          width: 500,
          transform: 'rotate(180deg)'
        },
        player3: {
          top:'56.5%',
          left: '-13.5%',
          transform: 'rotate(90deg)',
          position: 'absolute',
          width: 500
        },
        player4: {
          top:'43.5%',
          right: '-13.5%',
          transform: 'rotate(-90deg)',
          position: 'absolute',
          width: 500
        },
        player5: {
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

  render(){
    console.log(this.props.hands)
    if (this.props.hands.length === 2){
      return (
        <div>
          <Player hand={this.props.hands[0]} style={this.playersPosition().player1}/>
          <Player hand={this.props.hands[1]} style={this.playersPosition().player2}/>
        </div>
      )
    }else if(this.props.hands.length === 3) {
      return (
        <div>
          <Player hand={this.props.hands[0]} style={this.playersPosition().player1}/>
          <Player hand={this.props.hands[1]} style={this.playersPosition().player2}/>
          <Player hand={this.props.hands[2]} style={this.playersPosition().player3}/>
        </div>
      )
    }else if(this.props.hands.length === 4) {
      return (
        <div>
          <Player hand={this.props.hands[0]} style={this.playersPosition().player1}/>
          <Player hand={this.props.hands[1]} style={this.playersPosition().player2}/>
          <Player hand={this.props.hands[2]} style={this.playersPosition().player3}/>
          <Player hand={this.props.hands[3]} style={this.playersPosition().player4}/>
        </div>
      )
    }else if(this.props.hands.length === 5) {
      return (
        <div>
          <Player hand={this.props.hands[0]} style={this.playersPosition().player1}/>
          <Player hand={this.props.hands[1]} style={this.playersPosition().player2}/>
          <Player hand={this.props.hands[2]} style={this.playersPosition().player3}/>
          <Player hand={this.props.hands[3]} style={this.playersPosition().player4}/>
          <Player hand={this.props.hands[4]} style={this.playersPosition().player5}/>
        </div>
      )
    }else{
      return null;
    }
  }
}

export default PlayerHands;