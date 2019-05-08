import React from "react";
import {Router, Route, Switch} from 'react-router-dom'
import history from '../history';
import WelcomeScreen from './WelcomeScreen';
import Deck from "./Game";

const App = () => {
  return (
    <div className="ui container ">
      <Router history={history}>
        <Switch>
        <Route path="/" exact component={WelcomeScreen} />
        <Route path="/start/:playerCount" exact component={Deck} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
