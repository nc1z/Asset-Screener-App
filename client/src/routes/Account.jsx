import React from "react";
import UpdateUserForm from "../components/UpdateUserForm";
import UserDetails from "../components/UserDetails";

const Account = () => {
  // Import user details (maybe from context?)
  // to obtain email for userform props, and to populate table
  return (
    <div>
      <UpdateUserForm />
      <UserDetails />
    </div>
  );
};

export default Account;
