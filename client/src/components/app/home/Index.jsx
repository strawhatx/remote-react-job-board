import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import reddit_img from "../../../assets/images/reddit-search.png";

const HomeView = () => {
  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center flex-column bg-light text-dark"
        style={{ height: "89vh" }}
      >
        <Container fluid="sm">
          <Row className="justify-content-md-center mb-3">
            <Col className="d-flex justify-content-center flex-column">
              <h2 className="display-4">
                Find user issues on
                <br />
                Reddit
              </h2>

              <p className="lead mb-4">
                Search the Reddit database for user issues with
                <br />
                user defined queries.
              </p>

              <div className="mt-8">
                <Button
                  variant="primary"
                  className="w-full px-4 py-2 tracking-wide text-white"
                  href="/signup"
                >
                  Get Started
                </Button>
              </div>
            </Col>
            <Col className="d-flex justify-content-end">
              <img
                src={reddit_img}
                className="rounded"
                width="600"
                height="500"
                alt="app-previews"
              ></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default HomeView;
