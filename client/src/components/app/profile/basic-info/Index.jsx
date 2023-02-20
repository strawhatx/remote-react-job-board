import React from "react";
import { Card } from "react-bootstrap";
import UserProfileBasicInfoEmailField from "./components/Email";
import UserProfileBasicInfoImage from "./components/Image";

const UserProfileBasicInfo = () => {
  return (
    <Card classNames="p-3">
      <div>
        <h5 className="fw-bolder">Basic Details</h5>
      </div>

      <UserProfileBasicInfoImage />
      <UserProfileBasicInfoEmailField />
    </Card>
  );
};

export default UserProfileBasicInfo;
