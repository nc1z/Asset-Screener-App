import React, { useContext, useEffect } from "react";
import axios from "axios";
import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // User State
  const [user, setUser] = useState({
    data: null,
    error: null,
    loading: true,
  });

  // Before fetching response from /auth/user, check for token in storage
  const token = localStorage.getItem("token");

  // If token exists, set all request headers to contain Bearer token.
  if (token) {
    axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  }

  // On re-render, state resets, so we fetch user state again
  const fetchUser = async () => {
    try {
      const response = await axios.get("http://localhost:8080/auth/user");
    } catch (error) {
      return setUser({
        data: null,
        error: response.error.data.errors,
        loading: false,
      });
    }

    if (!response.data.user) {
      return setUser({
        data: null,
        error: response.error,
        loading: false,
      });
    }

    setUser({
      data: {
        id: response.data.user.id,
        email: response.data.user.email,
      },
      error: null,
      loading: false,
    });
  };

  useEffect(() => {
    if (token) {
      fetchUser();
    } else {
      setUser({
        data: null,
        error: null,
        loading: false,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={[user, setUser]}>
      {children}
    </UserContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(UserContext);
};
