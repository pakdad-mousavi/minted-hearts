import { Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import SignIn from "./pages/SignIn.jsx";
import Sign_up from "./pages/SignUp.jsx";
import About from "./pages/About.jsx";
import Homepage from "./components/home/Homepage.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element = {<Homepage />}/>
        <Route path="/signIn" element = {<SignIn/>} />
        <Route path="/signUp" element = {<Sign_up/>} />
        <Route path="/about" element = {<About />}/>
      </Routes>
    </>
  );
}

export default App;
