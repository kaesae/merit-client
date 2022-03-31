import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { useState} from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import SignOut from "./Components/SignOut/SignOut";
import NavBar from "./Components/NavBar/NavBar";
import Medal from "./Icons/goldmedal.png";


function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const [value, setValue] = useState("");
  const [latestPost, setLatestPost] = useState();

  const url = "http://127.0.0.1:8000"



  // Overview Page

  const handleSignUp = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-up/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
    .then((response) => response.json())
    console.log(`Welcome to Merit!`);
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
      console.log(`Token for Signing In: ${token}`)
    };

  const handleSignOut = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-out/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      method: "DELETE",
    })
      .then(() => setToken(""))
      .then(console.log("You are signed out!"));
      console.log(`Your token is now: ${token}`)
  };

  const handleChangePassword = (event) => {
    console.log(`Token for Changing Passwords: ${token}`)
    event.preventDefault();
    fetch("http://127.0.0.1:8000/change-password/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      method: "PATCH",
    })
    .then(console.log("You have successfully changed your password."));
  };

  const lastPost = (event) => {
    event.preventDefault();
    console.log(`${token}`)
    fetch("http://127.0.0.1:8000/overview/", {
      headers: {
        "Content-Type": "application/json",
        Authorizations: `Token ${token}`,
      },
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => console.log(data))

  }

  return (
    <div className="App">
      <Header />
      <NavBar />
      <Home />


      <main>
      <div className="home-container">
        <h3 className="merit-title">Merit</h3>
        <img className="medal" src={Medal} />

      </div>
        <Routes>
          {/* <Route path='/'/> */}
          <Route path='/home/'/>
          <Route path='/sign-up/' element={<SignUp handleChange={handleChange} handleSignUp={handleSignUp}/>}/>
          <Route path='/sign-in/' element={<SignIn handleChange={handleChange} handleSignIn={handleSignIn}/>}/>
          <Route path='/sign-out/' element={<SignOut handleChange={handleChange} handleSignOut={handleSignOut}/>}/>
          <Route path='/change-password/' element={<ChangePassword handleChange={handleChange} handleChangePassword={handleChangePassword}/>}/>
        </Routes>
      </main>



      <Footer />
    </div>
  );
}

export default App;
