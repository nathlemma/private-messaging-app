import React from "react";
import "../styles.scss"

const SignUp = () => {
  return (
    <div className="f-container">
      <div className="f-wrapper">
        {/* <h1>Synth</h1>
        <p>Sign up</p> */}
        <span className="logo"> Synth</span>
        <span className="title"> Register</span>
        <form>
          <input type="text" placeholder="Chat Name"/>
          <input type="email" placeholder="email"/>
          <input type="password" placeholder="password"/>
          <input type="file"/>
        </form>
        <button>Sign Up</button>
        <p>Already have an accoung? Sign in</p>
      </div>
    </div>
  );
};

export default SignUp;
