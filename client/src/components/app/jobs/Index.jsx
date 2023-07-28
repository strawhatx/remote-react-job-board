import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const JobsView = () => {
  return (
    <>
      <Container>
      <Row>
        <Col xs={3}>2 of 3 (wider)</Col>
        <Col xs={9}>3 of 3</Col>
      </Row>
    </Container>
    </>
  );
};

export default JobsView;
