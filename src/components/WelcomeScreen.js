import React from "react";
import Game from "../containers/Game";
import Spinner from "../spinner";

export default class WelcomeScreen2 extends React.Component {
  state = {
    name: "",
    playerCount: 0
  };

  componentDidMount() {
    this.props.fetchCards();
  }

  onNameChange = e => {
    this.setState({ name: e.target.value });
  };

  onCountChange = e => {
    this.setState({ playerCount: e.target.value });
  }

  onSubmit = e => {
    const status = "initializing";
    e.preventDefault();
    this.setState({ status });
    if(this.state.playerCount > 1 && this.state.playerCount < 6){
      this.props.getGameConfigs(this.state.name, this.state.playerCount, status);
      this.props.loadPlayers(this.props.deck.deck_id, this.state.name, 0);
    }else {
      alert('Please enter number between 2 and 5');
    }
  };

  configsForm() {
    return (
      <div>
        <form className="ui form">
          <input
            type="text"
            name="name"
            placeholder="Name Of Player"
            onChange={this.onNameChange}
          />
          <input
            type="number"
            name="playerCount"
            placeholder="Number Of Players"
            min="2"
            max="5"
            onChange={this.onCountChange}
          />
          <button className="ui button primary" onClick={this.onSubmit}>
            Submit
          </button>
        </form>
      </div>
    );
  }

  renderPlayer() {
    return this.props.player.players[0] ? <Game /> : <Spinner />;
  }

  render() {
    if (!this.props.configs) {
      return '';
    }

    return (
      <div>
        {this.props.configs.status === "gettingConfigs"
          ? this.configsForm()
          : this.renderPlayer()}
      </div>
    );
  }
}
