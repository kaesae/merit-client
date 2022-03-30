import { useState } from 'react'

const SignIn = ({ handleSignIn, handleChange }) => {
  const [verification, setVerification] = useState(false);
  const [email, setEmail] = useState("");


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
        <input type="submit" value="Submit" onClick={handleSignIn} />
      </form>
      {/* {verification === false ? (
        <div></div>
      ) : (
        <div className="unverified">
          <h1>
            We do not have record of your email. Please create an account to
            continue.
          </h1>
        </div>
      )} */}
    </div>
  );
};

export default SignIn;
