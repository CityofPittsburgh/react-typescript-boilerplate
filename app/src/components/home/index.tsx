import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import * as types from "../../store/types";
import * as user from "../../store/user";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import Header from "./header";
import Form from "../demoForm";
import Map from "../map";

type props = {
  user: types.user;
};

const Home = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Header content="Super important data collection" />
          <Form />
        </Col>
        <Header
          content="Super important map stuff"
          style={{ marginTop: "80px" }}
        />
        <Map />
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default connect(
  (state: ApplicationState) => ({
    ...state.user
  }),
  {
    ...user.actionCreators
  }
)(Home as any);
