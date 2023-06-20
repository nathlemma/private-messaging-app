const Login = () => {
    return (
      <div className="f-container">
        <div className="f-wrapper">
          <span className="logo"> Synth</span>
          <span className="title"> Login</span>
          <form>
            <input type="email" placeholder="username"/>
            <input type="password" placeholder="password"/>
          </form>
          <button className="button-cust">Sign in</button>
        </div>
      </div>
    );
  };
  
  export default Login;
  