import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import SignIn from "./Components/SignIn/SIgnIn";
import SignUp from "./Components/SignUp/SignUp";
import SignOut from "./Components/SignOut/SignOut";
import NavBar from "./Components/NavBar/NavBar";

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
      <NavBar />
      <Home />


      <main>
        <Routes>
          <Route path='/'/>
          <Route path='/sign-in/' element={<SignIn handleChange={handleChange} handleSignIn={handleSignIn}/>}/>
          <Route path='/sign-up/' element={<SignUp handleChange={handleChange} handleSubmit={handleSubmit}/>}/>
          <Route path='/change-password/' element={<ChangePassword handleChange={handleChange} handleChangePassword={handleChangePassword}/>}/>
        </Routes>
      </main>



      <Footer />
    </div>
  );
}

export default App;
