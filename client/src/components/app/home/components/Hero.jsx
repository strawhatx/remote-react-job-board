import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container className="hero" fluid="sm">
        <Row className="justify-content-md-center mb-3">
          <Col className="d-flex text-center justify-content-center flex-column">
            <h2 className="display-4">
              Hire the top
              <br />
              <span className="emphasis">REACT</span> developers
            </h2>

            <p className="lead mb-4">
              Directly connect with hundreds of React developers
              <br />
              looking for their next role.
            </p>

            <div className="mt-8">
              <Button
                variant="primary"
                className="w-full px-4 py-2 me-2 tracking-wide text-white"
                href="/signup"
              >
                GET STARTED
              </Button>
              <Button
                variant="light"
                className="w-full px-4 py-2 tracking-wide"
                href="/about"
              >
                LEARN MORE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
