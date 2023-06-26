import "../styles.scss";
import addImg from "../images/addAvatar.png";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
// import auth from "../firebase";

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const userName = event.target[0].value;
    const userEmail = event.target[1].value;
    const userPassword = event.target[2].value;
    const userPfp = event.target[3].file[0];
  };

  // const auth = getAuth();
  // signInWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed in
  //     const user = userCredential.user;
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //   });

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
        </form>

        <p style={{ "font-size": "small", color: "gray" }}>
          Already have an account? Sign in
        </p>
      </div>
    </div>
  );
};

export default SignUp;
