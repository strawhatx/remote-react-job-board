import React from "react";
import { Container } from "react-bootstrap";
import UserProfileBasicInfo from "./basic-info/Index";
import UserProfileDelete from "./delete/Index";
import UserProfileChangePassword from "./change-password/Index";

const UserProfileView = () => {
  return (
    <>
      <div className="pt-12 pb-15 bg-primary">
        <Container maxWidth="md">
          <h4 className="mb-1 py-5 text-left">Account</h4>
        </Container>
      </div>

      {/** Settings */}
      <div className="pb-1" sx={{ mt: -14, pb: 1 }}>
        <Container maxWidth="md">
          <UserProfileBasicInfo />
          <UserProfileChangePassword />
          <UserProfileDelete />
        </Container>
      </div>
    </>
  );
};

export default UserProfileView;
