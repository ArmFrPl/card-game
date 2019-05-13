import {getGameConfigs} from "../actions";
import {connect} from "react-redux";
import WelcomeScreen from '../components/WelcomeScreen';

const mapStateToProps = state => {
  return {
    configs: state.configs
  };
};

const mapDispatchToProps = dispatch => {
  return {
    gameConfigs: (name, playerCount, status) => dispatch(getGameConfigs(name, playerCount, status))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WelcomeScreen);
