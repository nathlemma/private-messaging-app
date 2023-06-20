import React from "react";
import "../styles.scss";
import addImg from "../images/addAvatar.png";

const SignUp = () => {
  return (
    <div className="f-container">
      <div className="f-wrapper">
        {/* <h1>Synth</h1>
        <p>Sign up</p> */}
        <span className="logo"> Synth</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="Chat Name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} id="upload" type="file" />
          
            <label htmlFor="upload">
              <img src={addImg} alt="" />
              <span>Add an avatar</span>
            </label>
           
        
        </form>
        <button>Sign Up</button>
        <p>Already have an accoung? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
