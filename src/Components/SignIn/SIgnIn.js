const SignIn = ({handleSignIn, handleChange}) => {
    return (
        <div className="sign-in">
          <h2>Sign In!</h2>
          <form onSubmit={handleSignIn}>
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <br />
            <input type="submit" value="Submit" onClick={handleSignIn}/>
          </form>
        </div>
    );
  };
  
  export default SignIn;