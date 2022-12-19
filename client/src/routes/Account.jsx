import React from "react";
import UserDetails from "../components/UserDetails";

const Account = () => {
  return (
    <div className="flex flex-col items-center my-20">
      <img src="/images/undraw-profile.svg" className="w-2/3 h-1/2 md:w-1/2" />
      <h2 className="font-bold text-center text-2xl">My Profile</h2>
      <UserDetails />
    </div>
  );
};

export default Account;
