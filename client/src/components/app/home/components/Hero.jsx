import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

const Hero = () => {
  return (
    <>
      <Container className="hero" fluid="sm">
        <Row className="justify-content-md-center mb-3">
          <Col className="d-flex text-center justify-content-center flex-column">
            <h2 className="display-4">
            The Reverse Job Board for   <br />
              <span className="fw-bold text-info">REACT</span> developers
            </h2>

            <p className="lead mb-4">
            Build an amazing portfolio and get hired. Showcase your projects, work experience,
              <br />
              tell who you are and be ready for companies to search for you within minutes.
            </p>

            <div className="mt-8">
              <Button
                variant="primary"
                className="fw-semibold w-full px-6 py-3 tracking-wide text-white"
                href="/signup"
              >
                GET STARTED FOR FREE
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Hero;
