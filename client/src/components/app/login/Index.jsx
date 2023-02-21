import React, { useState } from "react";
import LoginForm from "./components/Form";
import { Notification } from "../../Notification";
import { Card, Container } from "react-bootstrap";

const LoginView = () => {
  const [message, setMessage] = useState(null);

  return (
    <>
      <div className="py-10">
        <Container
          fluid="xs"
          className="login d-flex justify-content-center align-items-center flex-column bg-light text-dark"
          style={{ height: "100vh" }}
        >
          <Card style={{ width: "30rem" }}>
            <Card.Body className="d-flex justify-content-center align-items-center flex-column">
              <h2 className="mt-2 mb-2">Welcome back</h2>
              <h6 className="pb-1 text-muted">Please sign in</h6>

              {message && (
                <Notification
                  title={message.title}
                  severity={message.severity}
                  message={message.text}
                />
              )}

              <div className="w-100 pt-1">
                <LoginForm setMessage={setMessage} />
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </>
  );
};

export default LoginView;
