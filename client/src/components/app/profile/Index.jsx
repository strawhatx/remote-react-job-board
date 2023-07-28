import React from "react";
import { Card, Container, Nav, Tab, Row, Col } from "react-bootstrap";
import UserProfileBasicInfo from "./my-profile/basic-info/Index";
import UserProfileDelete from "./delete/Index";
import UserProfileChangePassword from "./change-password/Index";

const UserProfileView = () => {
  return (

    <>
      <div className="pt-12 pb-15">
        <Container>
          <Row>
            <Col>
              <h4 className="mb-1 py-5 text-left">Account</h4>
            </Col>
          </Row>
        </Container>
      </div>

      {/** Settings */}
      <Card >
        <Card.Body>
          <Container>
            <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
              <Row>
                <Col sm={2}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="profile">My Profile</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="security">Security</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="jobs">My Jobs</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="messages">Messages</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="billing">Billing</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="delete">Delete Account</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={{span: 8, offset: 1}}>
                  <Tab.Content>
                    <Tab.Pane eventKey="profile">
                      <div className="profile">
<UserProfileBasicInfo />
                      <UserProfileChangePassword />
                      <UserProfileDelete />
                      </div>
                      
                    </Tab.Pane>
                    <Tab.Pane eventKey="security">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="jobs">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="messages">Second tab content</Tab.Pane>
                    <Tab.Pane eventKey="billing">Second tab content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>

          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default UserProfileView;
