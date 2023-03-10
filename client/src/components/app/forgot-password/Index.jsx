import React, { useState } from "react";

import ForgotPasswordForm from "./components/Form";
import { Notification } from "../../Notification";
import { Container, Card } from "react-bootstrap";

const ForgotPasswordView = () => {
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
              <h2 className="mt-2 mb-1">Enter Email</h2>
              <h6 className="pb-2 text-muted">To retrieve your password</h6>

              {message && (
                <Notification
                  title={message.title}
                  severity={message.severity}
                  message={message.text}
                />
              )}

              <div className="w-100 pt-1">
                <ForgotPasswordForm setMessage={setMessage} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default ForgotPasswordView;
