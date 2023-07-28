import React from "react";
import { Card } from "react-bootstrap";
import UserProfileBasicInfoEmailField from "./components/Email";
import UserProfileBasicInfoImage from "./components/Image";

const UserProfileBasicInfo = () => {
  return (
    <>
      <div className="mb-2">
        <h5 className="fw-bolder">Basic Details</h5>
      </div>

      <Card className="p-3 my-profile">
        <UserProfileBasicInfoImage />
        <UserProfileBasicInfoEmailField />
      </Card>
    </>

  );
};

export default UserProfileBasicInfo;
