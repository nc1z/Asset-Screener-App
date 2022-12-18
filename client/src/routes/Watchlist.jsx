import React from "react";
import Watching from "../components/Watching";

const Watchlist = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="mt-20 pt-5 pb-2 px-5 text-3xl font-semibold text-left text-gray-900">
        <h2>My Watchlist</h2>
        <p className="mt-1 text-sm font-normal text-gray-700">
          Browse a list of your favourite assets below
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 items-center md:justify-evenly mx-auto overflow-x-auto relative">
        <Watching />
        <img
          src="../../images/undraw-crypto.svg"
          className="w-2/3 h-1/2 md:w-1/2"
        />
      </div>
    </div>
  );
};

export default Watchlist;
