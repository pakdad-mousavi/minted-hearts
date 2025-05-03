import { useState } from "react";
import { Link } from "react-router-dom";
import SignIn from "./../../pages/SignIn"; 
import SignUp from "./../../pages/SignUp";

export default function Navbar() {
  const [isSignInOpen, setSignInOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const closeModals = () => {
    setSignInOpen(false);
    setSignUpOpen(false);
  };

  return (
    <>
      <div className="flex justify-between items-center px-32 py-4 w-full h-18 bg-[#101111]">
        <div className="w-auto h-10">
          <img
            className="h-10 w-auto"
            src="./heart-shine-svgrepo-com (1).svg"
            alt="logo"
          />
        </div>
        <nav className="flex justify-end items-center">
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
            <li>
              <button 
                onClick={() => setSignInOpen(true)}
                className="text-white hover:text-gray-300"
              >
                Sign in
              </button>
            </li>
            <li>
              <button
                onClick={() => setSignUpOpen(true)}
                className="text-white hover:text-gray-300"
              >
                Sign up
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {isSignInOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className=" xp-8 w-full max-w-md relative">
            <button 
              onClick={closeModals}
              className="absolute top-22 right-4 text-gray-400 hover:text-black"
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
        </div>
      )}

      {isSignUpOpen && (
        <div className=" fixed inset-0 flex items-center justify-center z-50">
          <div className=" relative p-8 w-full h-full max-w-md">
            <button 
              onClick={closeModals}
              className=" absolute right-12 top-10 hover:text-black text-gray-400"
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
        </div>
      )}
    </>
  );
}