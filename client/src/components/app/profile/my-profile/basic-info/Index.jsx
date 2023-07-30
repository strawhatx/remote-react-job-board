import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import UserProfileBasicInfoEmailField from "./components/Email";
import UserProfileBasicInfoImage from "./components/Image";

const UserProfileBasicInfo = () => {
  return (
    <>
      <div className="mb-2">
        <h5 className="fw-bolder">My Profile</h5>
      </div>

      <Card className="p-3 my-profile">
        <Container>
          <Row>
            <Col sm={2}>
              <UserProfileBasicInfoImage />
            </Col>

            <Col sm={10}>
              <UserProfileBasicInfoEmailField />
            </Col>
          </Row>
        </Container>
      </Card>
    </>

  );
};

export default UserProfileBasicInfo;
