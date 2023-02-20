// shared/notification.js

import React from "react";
import PropTypes from "prop-types";
import { Alert } from "react-bootstrap";

const Notification = ({ title, message, severity }) => {
  return (
    <Alert variant={severity} className="w-100 my-2">
      <Alert.Heading>{title}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  severity: PropTypes.oneOf(["success", "info", "error", "warning"]).isRequired,
};

export { Notification };
