import React from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import { Alert } from "react-bootstrap";
import * as messages from "../../store/messages";

type props = {
  message: string;
  clearMessage: () => void;
};

const MessageContainer = (props: props) => {
  function createMarkup() {
    return { __html: props.message };
  }

  return props.message ? (
    <Alert variant="warning" onClose={() => props.clearMessage()} dismissible>
      <div dangerouslySetInnerHTML={createMarkup()} />
    </Alert>
  ) : null;
};

export default connect(
  (state: ApplicationState) => ({
    ...state.messages
  }),
  {
    ...messages.actionCreators
  }
)(MessageContainer);
