import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Signup Authentication Code Here

    setEmail("");
    setPassword("");
    // On Success
    navigate("/home");
  };

  return (
    <div className="mx-auto mt-24 max-w-sm">
      <h1 className="text-center text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate">
        Asset Screener
      </h1>
      <h2 className="text-center mt-2 text-xl font-medium leading-7 sm:mt-3 sm:text-2xl">
        Signup
      </h2>
      <form onSubmit={handleSubmit} className="p-4 md:p-0">
        <label htmlFor="email" className="block text-sm font-medium leading-5 ">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="email"
            type="email"
            value={email}
            placeholder="Jake@test.com"
            onChange={(e) => setEmail(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 mt-3"
        >
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400 transition ease-in-out duration-150"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Sign up
          </button>
          <div className="mt-3">
            Already have an account? <Link to="/">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
