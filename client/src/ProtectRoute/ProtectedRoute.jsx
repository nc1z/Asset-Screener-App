import React from "react";
import { UserAuth } from "../context/AuthContext";
import LoadingIcon from "../components/LoadingIcon";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const [user] = UserAuth();

  if (user.loading) {
    return (
      <div className="mt-36 flex justify-center">
        <LoadingIcon />
      </div>
    );
  }
  return user.data ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
