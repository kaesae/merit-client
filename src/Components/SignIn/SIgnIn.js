const SignIn = (handleSignIn, handleChange) => {
    return (
        <div className="sign-in">
          <h2>Sign In!</h2>
          <form onSubmit={handleSignIn}>
            <label>
              Email:
              <input type="email" name="email" onChange={handleChange} />
            </label>
            <label>
              Password:
              <input type="password" name="password" onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
    );
  };
  
  export default SignIn;