import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import * as types from "../../store/types";
import Spinner from "../utilities/spinner";

type props = {};

type stateField = boolean;

const Home = props => {
  const [state, newState] = useState<stateField>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 4, offset: 4 }} />
      </Row>
    </Container>
  );
};

export default connect(
  (state: ApplicationState) => ({}),
  {}
)(Home as any);
