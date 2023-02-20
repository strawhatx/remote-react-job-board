import React from "react";
import { Card } from "react-bootstrap";
import UserProfileDeleteView from "./components/Delete";

const UserProfileDelete = () => {
  return (
    <Card className="p-3 mt-4">
      <div>
        <h5 className="fw-bolder">Delete Account</h5>
      </div>
      <UserProfileDeleteView />
    </Card>
  );
};

export default UserProfileDelete;
