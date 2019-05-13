import {combineReducers} from "redux";
import cardReducer from "./cardReducer";
import playersReducer from "./playersReducer";
import configsReducer from "./configsReducer";

export default combineReducers({
  deck: cardReducer,
  players: playersReducer,
  configs: configsReducer
});