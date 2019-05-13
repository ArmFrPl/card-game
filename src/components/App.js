import React from "react";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import WelcomeScreen from '../containers/WelcomeScreen';
import Game from "../containers/Game";

const App = () => {
  return (
    <div className="ui container ">
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={WelcomeScreen} />
          <Route path="/start/:playerCount" exact component={Game} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
