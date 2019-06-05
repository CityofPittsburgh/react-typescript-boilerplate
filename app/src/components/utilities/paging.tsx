import React, { useEffect } from "react";
import { Container, Button, Col, Row } from "react-bootstrap";

// props for pagination:
// https://stackoverflow.com/questions/40232847/how-to-implement-pagination-in-reactjs

type props = {
  currentPage: number;
  totalPages: Array<number>;
  countItems: Array<string>;
  prev: () => void;
  next: () => void;
};

const Paging = (props: props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.currentPage]);

  return (
    <Container>
      {props.countItems.length > 5 && (
        <Row>
          <Col md={12}>
            <Col sm={6} className="text-center">
              <Button
                variant="secondary"
                onClick={() => props.prev()}
                disabled={
                  props.currentPage - 1 == 0 &&
                  props.totalPages.includes(props.currentPage + 1)
                }
              >
                Previous
              </Button>
            </Col>
            <Col sm={6} className="text-center">
              <Button
                variant="secondary"
                className="btn btn-secondary"
                onClick={() => props.next()}
                disabled={!props.totalPages.includes(props.currentPage + 1)}
              >
                Next
              </Button>
            </Col>
          </Col>
        </Row>
      )}
      <br />
      <br />
    </Container>
  );
};

export default Paging;
