import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../components/ErrorMessage";
import { UserAuth } from "../context/AuthContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        password,
      });
    } catch (error) {
      console.log(error.response.data.errors[0].msg);
      setError(error.response.data.errors[0].msg);
      // console.log(error.response.data.error[0].msg);
      // setError(error.response.data.error[0].msg);
    }

    // Set global user state on successful signup
    setUser({
      data: {
        id: response.data.user.id,
        email: response.data.user.email,
      },
      error: null,
      loading: false,
    });

    // Storing JWT in local storage
    localStorage.setItem("token", response.data.token);

    // Update axios header with token
    axios.defaults.common["authorization"] = `Bearer ${response.data.token}`;

    // On Success
    setEmail("");
    setPassword("");
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
      {error && <ErrorMessage error={error} />}
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
            required
            onChange={(e) => setEmail(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neob-green-400"
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
            minLength="8"
            required
            onChange={(e) => setPassword(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neob-green-400"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-neob-green-400 hover:bg-neob-green-600"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-white transition ease-in-out duration-150"
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
