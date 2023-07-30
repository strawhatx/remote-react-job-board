import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import useAuthStore from "../../../../../../stores/authentication";
import { axios } from "../../../../../../config/axios";

const UserProfileBasicInfoEmailField = () => {
  const [email, setEmail] = useState("");
  const [displayName, setDisplayName] = useState("");

  const { currentUser, update } = useAuthStore((state) => ({
    currentUser: state.currentUser,
  }));



  useEffect(() => {
    if (currentUser) {
      setEmail(currentUser?.email);
      
      // we just want the first part of the email just in case ther is no fist name
      setDisplayName(currentUser?.email.split("@")[0]);
    }

    if(currentUser && currentUser?.firstName) setDisplayName(`${currentUser?.firstName} ${currentUser?.lastName}`)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.email, currentUser?.firstName]);

  return (
    <div className="d-block mt-3 w-100">
      <div 
        className="fs-6 fw-semibold text-gray-600 dark:text-gray-200"
      >
        {displayName}
      </div>
      <div
        className="fs-8 fw-normal text-gray-400 dark:text-gray-200"
      >
        {email}
      </div>
    </div>
  );
};

export default UserProfileBasicInfoEmailField;
