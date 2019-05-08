import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
// import thunk from 'redux-thunk';

import App from "./components/App";
import reducers from "./reducers";

// const store = createStore(reducers, applyMiddleware(thunk));
const store = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={store(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
