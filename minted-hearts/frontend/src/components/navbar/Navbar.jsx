import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import React from "react";

export default function Navbar() {
  return (
    <div className="px-16 py-4 w-full h-20 bg-[#101111]">
      <nav className="flex justify-between items-center w-full h-full px-4">
        <div className="w-10 h-10">
          <button >
            <img className="h-10 w-10" src="./../../assets/logo/heart.svg" alt="logo" />
          </button>
        </div>
        <div>
          <ul className="flex items-center space-x-4 w-603 h-full">
          <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Sign in</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">Sign up</Link></li>
          <li><Link to="/" className="text-white hover:text-gray-300">About</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
