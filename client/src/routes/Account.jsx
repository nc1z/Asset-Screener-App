import React from "react";
import UpdateUserForm from "../components/UpdateUserForm";

const Account = () => {
  // Import user details (maybe from context?)
  // to obtain email for userform props, and to populate table
  return (
    <div>
      <UpdateUserForm />
    </div>
  );
};

export default Account;
