import {combineReducers} from "redux";
import cardReducer from "./cardReducer";
import drawCardReducer from "./drawCardReducer";

export default combineReducers({
  deck: cardReducer,
  draw: drawCardReducer
});