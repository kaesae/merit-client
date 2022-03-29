import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-up/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    });
  };

  const handleChange = (event) => {
    event.persist();
    setUser((prevUser) => {
      const editedUser = {
        ...prevUser,
        [event.target.name]: event.target.value,
      };
      return editedUser;
    });
  };

  const handleSignIn = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-in/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => setToken(data.user.token));
  };

  const handleSignOut = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-out/", {
      headers: {
        "Content-Type": "application/json",
        Authorizations: `Token ${token}`,
      },
      method: "DELETE",
    })
      .then(() => console.log("You are signed out!"))
      .then(() => setToken(""));
  };

  const handleChangePassword = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/change-password/", {
      headers: {
        "Content-Type": "application/json",
        Authorizations: `Token ${token}`,
      },
      method: "PUT",
    }).then(() => console.log("You have successfully changed your password."));
  };

  return (
    <div className="App">
      <Header />

      <main>
        <div className="sign-up">
          <h2>Sign Up!</h2>
          <form onSubmit={handleSubmit}>
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

        <button onClick={handleSignOut}>Sign Out</button>
      </main>

      <h2>Change Password</h2>
      <form onSubmit={handleChangePassword}>
        <label>
          Old Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <label>
          New Password:
          <input type="password" name="password" onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <Footer />
    </div>
  );
}

export default App;
