import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import ErrorMessage from "../components/ErrorMessage";
import LoadingIcon from "../components/LoadingIcon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [user, setUser] = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data: response } = await axios.post(
        "https://good-gray-dugong-yoke.cyclic.app/auth/login",
        {
          email,
          password,
        }
      );
      if (response.data) {
        // Set global user state on successful login
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
        axios.defaults.headers.common[
          "authorization"
        ] = `Bearer ${response.data.token}`;

        // On Success
        setEmail("");
        setPassword("");
        navigate("/home");
      }
    } catch (error) {
      setLoading(false);
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  return (
    <div className="mx-auto mt-24 max-w-sm">
      <h1 className="text-center text-2xl font-bold leading-7 sm:text-3xl sm:leading-9 sm:truncate">
        Asset Screener
      </h1>
      <h2 className="text-center mt-2 text-xl font-medium leading-7 sm:mt-3 sm:text-2xl">
        Login
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
            disabled={loading ? true : false}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-neob-green-400 hover:bg-neob-green-600 ${
              loading ? "bg-emerald-800 hover:cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-200 animate-spin fill-black"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </span>
                <span className="text-white">Authenticating</span>
              </>
            ) : (
              <>
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
                <span>Sign in</span>
              </>
            )}
          </button>
          <div className="mt-3">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
