import React, { useState, useEffect } from "react";
import useAuthStore from "../../../../../../stores/authentication";
import { axios } from "../../../../../../config/axios";
import { storage, getDownloadURL, ref } from "../../../../../../config/firebase";


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
     <div className="d-flex align-items-start pt-3 container">
      <div className="picture">
         <input accept="image/*" id="profile-upload" type="file" onChange={handleChange}  hidden />
        <div htmlFor="profile-upload" className="outer" style={{backgroundImage: `url(${photoUrl})`}}>
          <div className="inner">
            <FontAwesome icon="fa-solid fa-camera-retro" />
          </div>
        </div>
      </div>
     
      </div>
    </>
  );
};

export default UserProfileBasicInfoImage;
