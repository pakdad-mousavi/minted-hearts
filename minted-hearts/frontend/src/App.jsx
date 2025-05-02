import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Sign_in from "./pages/Sign-in.jsx";
import Sign_up from "./pages/Sign-up.jsx";
import About from "./pages/About.jsx";
import Homepage from "./components/navbar/home/Homepage.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />}/>
        <Route path="/sign-in" element = {<Sign_in/>} />
        <Route path="/sign-up" element = {<Sign_up/>} />
        <Route path="/about" element = {<About />}/>
      </Routes>
    </>
  );
}

export default App;
