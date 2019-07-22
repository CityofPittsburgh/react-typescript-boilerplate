import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ApplicationState } from "../../store";
import HydrateStore from "../utilities/hydrateStore";
import { Container, Col, Row } from "react-bootstrap";
import FormHeader from "../demoForm/header";
import Form from "../demoForm";
import MapHeader from "../map/markup/header";
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
          <FormHeader />
          <Form />
        </Col>
        <MapHeader />
        <Map />
      </Row>
      <br />
      <br />
      <br />
    </Container>
  );
};

export default connect(
  (state: ApplicationState) => ({}),
  {}
)(Home as any);
