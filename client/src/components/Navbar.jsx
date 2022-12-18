import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import notify from "../functions/notify";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = UserAuth();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    setUser({
      data: null,
      error: null,
      loading: false,
    });
    localStorage.removeItem("token");
    notify({
      success: "Logout Success",
      error: "",
    });
    navigate("/");
  };
  return (
    <nav className="px-2 py-2.5 md:py-1 bg-zinc-800 fixed w-full z-20 top-0 left-0 border-bborder-gray-600">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link to="/home" className="flex items-center">
          <img
            src="../../images/bar-chart.png"
            className="h-6 mr-3 sm:h-9"
            alt="Asset Screener Logo"
          />
          <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
            Asset Screener
          </span>
        </Link>
        <div className="flex md:order-2">
          <Link to="/account" className="text-white mt-2 mx-4 hidden lg:block">
            {user.data ? user.data.email : "User not found"}
          </Link>
          <button
            type="button"
            className="text-white bg-neob-green-600 focus:ring-4 focus:outline-none focus:ring-neob-green-200 font-medium rounded-lg text-md px-5 text-center mr-3 md:mr-0"
            onClick={handleLogout}
          >
            Log Out
          </button>
          <button
            type="button"
            className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            onClick={toggleMenu}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            menuOpen ? "" : "hidden"
          } w-full md:flex md:w-auto md:order-1 lg:pl-16`}
        >
          <ul
            className={`flex flex-col p-4 mt-4 ${
              menuOpen && "mb-2"
            } border rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium md:border-0 bg-zinc-600 md:bg-zinc-800 border-zinc-500`}
          >
            <li>
              <Link
                to="/home"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/watchlist"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Watchlist
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/account"
                onClick={() => setMenuOpen(false)}
                className="block py-2 pl-3 pr-4rounded md:p-0 md:hover:text-white text-gray-200 hover:bg-zinc-700 hover:text-white md:hover:bg-transparent border-gray-700 md:hover:underline hover:underline-offset-8 hover:decoration-emerald-600"
              >
                Account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
