import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import Form from "../demoForm";
import Map from "../map";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <HydrateStore />
      <Row>
        <Col md={{ span: 4, offset: 4 }}>
          <Form />
          <Map />
        </Col>
      </Row>
    </Container>
  );
};

export default connect(
  (state: ApplicationState) => ({}),
  {}
)(Home as any);
