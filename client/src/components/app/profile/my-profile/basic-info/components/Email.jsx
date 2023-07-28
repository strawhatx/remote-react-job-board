import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuthStore from "../../../../../../stores/authentication";
import { axios } from "../../../../../../config/axios";

const UserProfileBasicInfoEmailField = () => {
  const [email, setEmail] = useState("");

  const { currentUser, update } = useAuthStore((state) => ({
    currentUser: state.currentUser,
    update: state.updateEmail,
  }));

  const handleSubmit = () => {
    update(email)
      .then(async () => {
        await axios.put("/accounts/", {
          uid: currentUser?.uid,
          email: email,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  useEffect(() => {
    if (currentUser) setEmail(currentUser?.email);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.email]);

  return (
    <div className="d-flex mt-4 align-items-center w-100">
      <label
        htmlFor="email"
        className="block mb-2 text-sm font-medium text-gray-600 dark:text-gray-200"
      >
        Email Address
      </label>
      <input
        className="mt-24 w-100 flex-grow-1"
        type="email"
        onInput={handleChange}
        value={email}
      />

      <Button size="lg" type="submit" variant="prinary" onClick={handleSubmit}>
        Update
      </Button>
    </div>
  );
};

export default UserProfileBasicInfoEmailField;
