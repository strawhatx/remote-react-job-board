import React from "react";
import { Card } from "react-bootstrap";
import UserProfileChangePasswordView from "./components/ChangePassword";

const UserProfileChangePassword = () => {
  return (
    <Card className="p-3 mt-4">
      <div>
        <h5 className="fw-bolder">Change Password</h5>
      </div>
      <UserProfileChangePasswordView />
    </Card>
  );
};

export default UserProfileChangePassword;
