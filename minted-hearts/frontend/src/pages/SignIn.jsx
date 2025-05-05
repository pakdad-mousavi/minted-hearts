import { useState } from "react";
import { FaSpinner, FaLock, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

const SignIn = ({onSwitch}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log("Signing in with:", formData);
    setTimeout(() => setIsLoading(false), 1500); // Simulate loading
  };

  return (
    <div className="h-screen  flex items-center justify-center ">
      <div className="w-full max-w-md">
        <div className="bg-white border  rounded-xl overflow-hidden">

          <div className="p-8 text-center border-b border-gray-800">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome</h2>
            <p className="text-gray-900">Sign in to your account</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-black mb-2">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaEnvelope className="text-white" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-900 mb-2">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaLock className="text-white" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="••••••••"
                  minLength="6"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 hover:cursor-pointer  border-gray-700 rounded bg-gray-800"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a
                  href="#"
                  className="font-medium text-gray-700 hover:text-blue-900"
                >
                  Forgot password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gray-900 border-1  border-black hover:cursor-pointer  hover:bg-white hover:text-gray-900 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2 transition duration-200"
            >
              {isLoading ? (
                <>
                  <FaSpinner className="animate-spin" />
                  <span>Signing In...</span>
                </>
              ) : (
                <span>Sign In</span>
              )}
            </button>
          </form>

          <div className="px-8 py-6 bg-gray-900 text-center">
            <p className="text-white">
              Don't have an account?{" "}
                <button
                  onClick={onSwitch}
                  className="text-blue-800 hover:text-blue-400 hover:cursor-pointer  font-medium"
                >
                  Sign up
                </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
