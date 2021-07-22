import { connect } from "react-redux";
import Home from "./Home";

const mapStateToProps = (state) => {
  return {
    content: state.home,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);