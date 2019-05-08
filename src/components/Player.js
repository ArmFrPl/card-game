import React from 'react';

class Player extends React.Component {
  render() {
    return(
      <div style={this.props.style}>
        {Object.values(this.props.hand).map(card =>
          <img key={card.code} src={card.image} alt="" style={{width: 92, marginLeft: -46}}/>
        )}
      </div>
    )
  }
}

export default Player;