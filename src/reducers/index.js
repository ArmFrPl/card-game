import {combineReducers} from "redux";
import cardReducer from "./cardReducer";
import playersReducer from "./playersReducer";
import configsReducer from "./configsReducer";
import gameReducer from "./gameReducer";

export default combineReducers({
  deck: cardReducer,
  player: playersReducer,
  configs: configsReducer,
  game: gameReducer
});