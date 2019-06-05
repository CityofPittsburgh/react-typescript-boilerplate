import React, { useEffect } from "react";
import logout from "../../functions/logout";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import * as types from "./../../store/types";
import * as user from "../../store/user";
import { Button } from "react-bootstrap";

type props = {
  user: types.user;
  loadUser: () => void;
};

const AccountContainer = props => {
  useEffect(() => {
    props.loadUser();
  }, []);

  return (
    <div>
      {props.user && <span style={{ color: "#fff" }}>{props.user.name}</span>}
      <Button onClick={logout} variant="link" style={{ marginTop: "-3px" }}>
        Logout
      </Button>
    </div>
  );
};

export default connect(
  (state: ApplicationState) => ({
    ...state.user
  }),
  {
    ...user.actionCreators
  }
)(AccountContainer);
