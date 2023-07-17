import "../styles.scss";
import addImg from "../images/addAvatar.png";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

import { auth, storage, db } from "../firebase";
import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  const [error, setError] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userName = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const userPfp = event.target[3].files[0];

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userPfp);
      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, userPfp);
      uploadTask.on(
        (err) => setError(true),
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateProfile(response.user, {
              userName,
              pfpURL: downloadURL,
            });

            await setDoc(doc(db, "users", response.user.uid), {
              id: response.user.uid,
              userName,
              email,
              pfpURL: downloadURL,
            });
            await setDoc(doc(db, "usersChat", response.user.uid, {}));
          });
        }
      );
      setError(false);
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };
  return (
    <div className="f-container">
      <div className="f-wrapper">
        {/* <h1>Synth</h1>
        <p>Sign up</p> */}
        <span className="logo"> Synth</span>
        <span className="title"> Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Chat Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} id="upload" type="file" />

          <label htmlFor="upload">
            <img src={addImg} alt="" />
            <span>Add an avatar</span>
          </label>
          <button type="submit">Sign Up</button>
          {error && <span className="error">Something went wrong.</span>}
        </form>

        <p style={{ "font-size": "small", color: "gray" }}>
          Already have an account? Sign in
        </p>
      </div>
    </div>
  );
};

export default SignUp;
