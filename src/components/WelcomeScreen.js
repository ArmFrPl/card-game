import React from 'react';
import Game from '../containers/Game';

export default class WelcomeScreen extends React.Component{

  state = {
    name: '',
    playerCount: 0
  };

  onNameChange = (e) => {
    this.setState({name: e.target.value})
  };

  onCountChange = (e) => {
    this.setState({playerCount: e.target.value})
  };

  onSubmit = (e) => {
    const status = 'initializing';
    e.preventDefault();
    this.setState({status})
    this.props.gameConfigs(this.state.name, this.state.playerCount, status)
  };

  render() {
    return (
      <div>
        {
          this.props.configs.status === 'gettingConfigs' ?
            (
              <div>
                <form className="ui form">
                  <input type="text" name="name" placeholder="Name Of Player" onChange={this.onNameChange}/>
                  <input type="number" name="playerCount" placeholder="Number Of Players" min="2" max="5"
                         onChange={this.onCountChange}/>
                  <button className="ui button primary" onClick={this.onSubmit}>Submit</button>
                </form>
              </div>
            ) : <Game />
        }
      </div>
    )
  }
}

