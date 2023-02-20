import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import useAuthStore from "../../../../../stores/authentication";
import { axios } from "../../../../../config/axios";
import { storage, getDownloadURL, ref } from "../../../../../config/firebase";

const UserProfileBasicInfoImage = () => {
  const [photoUrl, setPhotoUrl] = useState("");

  const { currentUser, update } = useAuthStore((state) => ({
    currentUser: state.currentUser,
    update: state.updateImage,
  }));

  const handleChange = (e) => {
    if (!e.target.files[0]) return;

    let img = e.target.files[0];

    update(img)
      .then(async () => {
        const imgRef = ref(storage, `profiles/${currentUser.uid}.png`);
        const photoURL = await getDownloadURL(imgRef);

        setPhotoUrl(photoURL);

        axios.put("/accounts/", {
          uid: currentUser?.uid,
          image: photoURL,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (currentUser) setPhotoUrl(currentUser?.photoURL ?? "");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.photoURL]);

  return (
    <>
      <div className="s-flex align-items-center pt-3">
        <img
          src={photoUrl}
          className="img-thumbnail me-2"
          width="64"
          height="64"
          alt={currentUser?.displayName}
        ></img>

        <label htmlFor="contained-button-file">
          <input
            accept="image/*"
            id="contained-button-file"
            type="file"
            onChange={handleChange}
            className="d-none"
          />
          <Button
            variant="primary"
            size="lg"
            aria-label="change image"
            className="py-1 px-2"
          >
            Change
          </Button>
        </label>
      </div>
    </>
  );
};

export default UserProfileBasicInfoImage;
