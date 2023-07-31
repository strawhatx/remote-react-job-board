import React from "react";
import { Button, Card, Container, Row } from "react-bootstrap";
import UserProfilePersonalInformationForm from "./components/Form";

const UserProfilePersonalInformation = () => {
  const [editing, setEditing] = useState(false);
  return (
    <>
      <Card className="p-3 my-profile">
        <Container>
          <Row>
            <Col sm={10}>
              <div className="fw-medium fs-7">Personal Information</div>
            </Col>
            <Col sm={2}>
              <Button
                variant="primary"
                className="w-full px-4 py-2 tracking-wide text-white"
                onClick={() => setEditing(true)}>Edit</Button>
            </Col>
          </Row>
          <Row>
            <UserProfilePersonalInformationForm isEditing={editing} />
          </Row>
        </Container>
      </Card>
    </>

  );
};

export default UserProfilePersonalInformation;
