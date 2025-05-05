import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SignIn from "./../../pages/SignIn";
import SignUp from "./../../pages/SignUp";
import logo from "./heart-shine-svgrepo-com (1).svg";

export default function Navbar() {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const closeModals = () => {
    setSignInOpen(false);
    setSignUpOpen(false);
  };

  useEffect(() => {
    document.body.style.overflow =
      isSignInOpen || isSignUpOpen ? "hidden" : "auto";
  }, [isSignInOpen, isSignUpOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") closeModals();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <>
      <div className="flex justify-between items-center px-32 py-4 w-full h-18 bg-[#101111] font-[RobotoNew]">
        <div className="w-auto h-10">
          <img className="h-10 w-auto" src={logo} alt="logo" />
        </div>
        <nav className=" flex justify-end items-center">
          <ul className="flex items-center space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <div className="space-x-3 flex items-center justify-between">
              <p className="text-white  cursor-default">Sign</p>
              <li>
                <button
                  onClick={() => setSignInOpen(true)}
                  className="text-white hover:cursor-pointer hover:scale-105  hover:text-cyan-400 transition-colors duration-600"
                >
                  IN
                </button>
              </li>
              <li>
                <button
                  onClick={() => setSignUpOpen(true)}
                  className="text-white hover:text-pink-600 hover:scale-105 hover:cursor-pointer transition-colors duration-600"
                >
                  UP
                </button>
              </li>
            </div>
          </ul>
        </nav>
      </div>

      {(isSignInOpen || isSignUpOpen) && (
        <div className="fixed inset-0 bg-gray-900/90 flex items-center justify-center z-40">
          {isSignInOpen && (
            <div className="relative p-8 w-full max-w-md">
              <button
                onClick={closeModals}
                className="absolute top-30 right-12 text-gray-400 hover:cursor-pointer  hover:text-black"
              >
                ✕
              </button>
              <SignIn
                onClose={closeModals}
                onSwitch={() => {
                  setSignInOpen(false);
                  setSignUpOpen(true);
                }}
              />
            </div>
          )}

          {isSignUpOpen && (
            <div className=" relative p-8 w-full  max-w-md">
              <button
                onClick={closeModals}
                className=" absolute right-12 top-10 hover:cursor-pointer  hover:text-black text-gray-400"
              >
                ✕
              </button>
              <SignUp
                onClose={closeModals}
                onSwitch={() => {
                  setSignUpOpen(false);
                  setSignInOpen(true);
                }}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
}
