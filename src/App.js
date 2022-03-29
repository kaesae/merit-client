import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  const [user, setUser] = useState({ email: "", password: "" });


  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://127.0.0.1:8000/sign-up/", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(user),
    })
  };

  const handleChange = (event) => {
    event.persist();
    setUser((prevUser) => {
      const editedUser = {
        ...prevUser,
        [event.target.name]: event.target.value,
      }
      return editedUser;
    })
  }

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



      </main>
      <Footer />
    </div>
  );
}

export default App;
