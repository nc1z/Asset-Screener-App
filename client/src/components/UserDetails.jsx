import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineExternalLink } from "react-icons/hi";
import { UserAuth } from "../context/AuthContext";

const UserDetails = () => {
  const [user] = UserAuth();
  return (
    <div className="container mx-auto px-4 overflow-x-auto relative">
      <table className="w-1/2 my-8 text-left mx-auto">
        <thead className="border-b border-gray-300 text-xs text-gray-700">
          <tr>
            <th>Email</th>
            <th>Last Logged In</th>
            <th>Watchlist</th>
            <th>Portfolio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.data ? user.data.email : "User not found"}</td>
            <td>timestamp</td>
            <td>
              <Link to="/watchlist">
                <HiOutlineExternalLink />
              </Link>
            </td>
            <td>
              <Link to="/portfolio">
                <HiOutlineExternalLink />
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
