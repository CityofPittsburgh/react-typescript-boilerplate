import * as React from "react";
import { Container, Col, Row } from "react-bootstrap";
import NavMenu from "./nav";

export default props => (
  <Container fluid>
    <Row>
      <NavMenu />
    </Row>
    <Row>
      <Col sm={12}>{props.children}</Col>
    </Row>
  </Container>
);
