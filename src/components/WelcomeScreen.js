import React from 'react';
import {Link} from "react-router-dom";

class WelcomeScreen extends React.Component{
  render() {
    return (
      <div style={{
        width: 400,
        height: 300,
        margin:'0 auto',
        textAlign: 'center',
        marginTop: '12.5%',
      }} >
        <h1 className="ui header">Welcome to Game</h1>
        <div className="ui middle aligned animated list">
          <div className="item">
              <div className="content">
                <Link to="/start/2">
                  <div className="ui button primary">2 Players</div>
                </Link>
              </div>
          </div>
        </div>
        <div className="ui middle aligned animated list">
          <div className="item">
              <div className="content">
                <Link to="/start/3">
                  <div className="ui button primary">3 Players</div>
                </Link>
              </div>
          </div>
        </div>
        <div className="ui middle aligned animated list">
          <div className="item">
              <div className="content">
                <Link to="/start/4">
                  <div className="ui button primary">4 Players</div>
                </Link>
              </div>
          </div>
        </div>
        <div className="ui middle aligned animated list">
          <div className="item">
              <div className="content">
                <Link to="/start/5">
                  <div className="ui button primary">5 Players</div>
                </Link>
              </div>
          </div>
        </div>
        <div className="ui middle aligned animated list">
          <div className="item">
              <div className="content">
                  <div className="ui button negative" onClick={window.close()}>Exit</div>
              </div>
          </div>
        </div>
      </div>
    )
  }
};

export default WelcomeScreen;