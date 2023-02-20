import React, { useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Notification } from "../../Notification";
import RegisterForm from "./components/Form";

const RegisterView = () => {
  const [message, setMessage] = useState(null);

  return (
    <>
      <div className="py-10">
        <Container
          fluid="xs"
          className="d-flex justify-content-center align-items-center flex-column bg-light text-dark"
          style={{ height: "100vh" }}
        >
          <Card style={{ width: "30rem" }}>
            <Card.Body className="d-flex justify-content-center align-items-center flex-column">
              <h6 className="mt-2 mb-1"> Sign Up</h6>
              <p className="pb-2 fw-semibold grey[500]">
                To start using Remote React Job Board
              </p>

              {message && (
                <Notification
                  title={message.title}
                  severity={message.severity}
                  message={message.text}
                />
              )}

              <div className="w-100 pt-1">
                <RegisterForm setMessage={setMessage} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default RegisterView;
