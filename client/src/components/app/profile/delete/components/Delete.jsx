import React from "react";
import { Button } from "react-bootstrap";

const UserProfileDeleteView = () => {
  const handleDelete = () => {
    // TODO: delete the user profile image in storage
    // TODO: delete the user profile in both databses
  };

  return (
    <div className="pt-3">
      <h6 className="mb-3">
        Delete your account and all of your source data. This is irreversible.
      </h6>

      <Button size="lg" type="submit" variant="error" onClick={handleDelete}>
        Delete Account
      </Button>
    </div>
  );
};

export default UserProfileDeleteView;
