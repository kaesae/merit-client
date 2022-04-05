import "./App.css";
import { Route, Routes, Navigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import SignOut from "./Components/SignOut/SignOut";
import NavBar from "./Components/NavBar/NavBar";
import Medal from "./Icons/goldmedal.png";
import PostForm from "./Components/PostForm/PostForm";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });
  const [token, setToken] = useState("");
  const [latestPost, setLatestPost] = useState({});
  const [rating, setRating] = useState("");

  const url = "http://127.0.0.1:8000"


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
      .then(console.log("You have signed in"))
      .then(console.log(`Token for Signing In: ${token}`))
      .then(() => displayLatestPost());
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

  const displayLatestPost = (event) => {
    console.log(`Token for the latest post is: ${token}`)
    // Currently hardcoded
    fetch(`http://127.0.0.1:8000/posts/12`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      method: "GET",
    })
    .then((response) => response.json())
    .then((data) => setLatestPost(data))
    .then(() => setRating(latestPost.stars))
    .then(console.log(latestPost))
    .then(console.log(rating))
    .then(() => handleStars());
  };

  const handleStars = () => {
    let star = latestPost.stars
    const hideStars = () => {
      document.getElementById("star-1").style.visibility="hidden"
      document.getElementById("star-2").style.visibility="hidden"
      document.getElementById("star-3").style.visibility="hidden"
      document.getElementById("star-4").style.visibility="hidden"
      document.getElementById("star-5").style.visibility="hidden"
    }
    if (star == 1) {
      hideStars()
      document.getElementById("star-1").style.visibility="visible"
    } else if (star == 2) {
      hideStars()
      document.getElementById("star-1").style.visibility="visible"
      document.getElementById("star-1").style.visibility="visible"
    } else if (star == 3) {
      hideStars()
      document.getElementById("star-1").style.visibility="visible"
      document.getElementById("star-2").style.visibility="visible"
      document.getElementById("star-3").style.visibility="visible"
    } else if (star == 4) {
      hideStars()
      document.getElementById("star-1").style.visibility="visible"
      document.getElementById("star-2").style.visibility="visible"
      document.getElementById("star-3").style.visibility="visible"
      document.getElementById("star-4").style.visibility="visible"

    }
    else {
      hideStars()
      document.getElementById("star-1").style.visibility="visible"
      document.getElementById("star-2").style.visibility="visible"
      document.getElementById("star-3").style.visibility="visible"
      document.getElementById("star-4").style.visibility="visible"
      document.getElementById("star-5").style.visibility="visible"
    }
  }

  const handlePost = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/post/", {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${token}`,
      },
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((data) => setLatestPost(data))
      .then(console.log("You have posted!"));
      console.log(`${latestPost}`)
  };



  return (
    <div className="App">
      <Header />
      <NavBar />


      <main>

      <div className="home-container">
        <h3 className="merit-title">Merit</h3>
        <img className="medal" src={Medal} />
      </div>

      
        <Routes>
          {/* <Route path='/'/> */}
          <Route path='/home/' element={<Home displayLatestPost={displayLatestPost} latestPost={latestPost} />} />
          <Route path='/sign-up/' element={<SignUp handleChange={handleChange} handleSignUp={handleSignUp}/>}/>
          <Route path='/sign-in/' element={<SignIn handleChange={handleChange} handleSignIn={handleSignIn}/>}/>
          <Route path='/sign-out/' element={<SignOut handleChange={handleChange} handleSignOut={handleSignOut}/>}/>
          <Route path='/change-password/' element={<ChangePassword handleChange={handleChange} handleChangePassword={handleChangePassword}/>}/>
          <Route path='/post/' element={<PostForm handleChange={handleChange} handlePost={handlePost} />}/>
        </Routes>
      </main>



      <Footer />
    </div>
  );
}

export default App;
