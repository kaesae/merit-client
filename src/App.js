import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ChangePassword from "./Components/ChangePassword/ChangePassword";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const [latestPost, setLatestPost] = useState();

  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/overview", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorizations: `Token ${token}`,
  //     },
  //     method: "GET",
  //   })
  //     .then((response) => response.json())
  //     .then(console.log("YOU ARE HERE"))
  //     .then((data) => console.log(data));
  // }, []);

  // Homepage with latest post


  // Overview Page

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
      .then((data) => setToken(data.user.token))
      .then(console.log("You have signed in"));
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
      <Home />

      <div className="navbar-links"></div>
      <Link classname="navbar-link" to='/sign-in'>Sign In</Link>
      <Link classname="navbar-link" to='/sign-up'>Sign Up</Link>
      <Link classname="navbar-link" to='/change-password'>Change Password</Link>
      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/sign-up/' />
          <Route path='/change-password/' element={<ChangePassword handleChange={handleChange} handleChangePassword={handleChangePassword}/>}/>
        </Routes>

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



      <Footer />
    </div>
  );
}

export default App;
