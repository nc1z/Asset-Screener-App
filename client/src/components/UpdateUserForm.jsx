import React from "react";
import { useState } from "react";
import axios from "axios";

const UpdateUserForm = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");

  const handleUpdate = async () => {
    try {
      // axios here
      await console.log("Updated password");
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate();
  };
  return (
    <div className="mx-auto mt-24 max-w-sm">
      <h2 className="text-center mt-2 text-xl font-medium leading-7 sm:mt-3 sm:text-2xl">
        Update User Details
      </h2>
      <form onSubmit={handleSubmit} className="p-4 md:p-0">
        <label htmlFor="email" className="block text-sm font-medium leading-5 ">
          Email
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="email"
            type="email"
            readOnly="readonly"
            placeholder="replacethiswithuseremail@test.com"
            className="read-only:bg-gray-100 form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none active:cursor-not-allowed"
          />
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 mt-3"
        >
          Current Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neob-green-400"
          />
        </div>
        <label
          htmlFor="password"
          className="block text-sm font-medium leading-5 mt-3"
        >
          New Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setNewPassword(e.target.value)}
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
            Confirm Change
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateUserForm;
