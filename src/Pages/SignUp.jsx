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
    console.log(userPfp);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      const storageRef = ref(storage, userName);
      const uploadTask = uploadBytesResumable(storageRef, userPfp);
      console.log(res);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          setError(true);
          console.log(error);
        },
        async () => {
          setError(false);
          await updateProfile(res.user, {
            displayName: userName,
            photoURL: getDownloadURL(res.user.photoURL),
          });
        }
      );
      await setDoc(doc(db, "users", res.user.uid), {
        name: userName,
        state: "CA",
        country: "USA",
      });
    } catch (err) {
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
