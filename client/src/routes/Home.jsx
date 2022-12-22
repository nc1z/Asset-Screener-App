import React, { useState } from "react";
import Dashboard from "../components/Dashboard";
import Pagination from "../components/Pagination";

const Home = () => {
  const [page, setPage] = useState("1");

  return (
    <div className="container mx-auto my-20">
      <div className="p-5 text-3xl font-semibold text-left text-gray-900">
        <h2>Crypto Dashboard</h2>
        <p className="mt-1 text-sm font-normal text-gray-700">
          Browse a list of Cryptocurrency assets, powered by the{" "}
          <a
            href="https://www.coingecko.com/en/api/documentation"
            target="_blank"
          >
            Coingecko Api
          </a>
        </p>
      </div>
      <div className="overflow-x-auto px-5">
        <Dashboard page={page} />
      </div>
      <div className="m-10">
        <Pagination page={page} setPage={setPage} />
      </div>
    </div>
  );
};

export default Home;
