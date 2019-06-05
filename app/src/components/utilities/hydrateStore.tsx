// hydrates the wholeeeeee store
import { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import * as user from "../../store/user";

type props = {
  loadUser: () => void;
};

const Hydrate = (props: props) => {
  useEffect(() => {
    props.loadUser();
  });

  return null;
};

export default connect(
  (state: ApplicationState) => ({
    ...state.user
  }),
  {
    ...user.actionCreators
  }
)(Hydrate);
