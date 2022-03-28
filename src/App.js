import './App.css';
import { Route, Routes, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Footer />
    </div>
  );
}

export default App;
