import React from "react";
import { Link } from "react-router-dom";
import PortfolioTable from "../components/PortfolioTable";

const Portfolio = () => {
  return (
    <div className="container mx-auto my-20">
      <div className="flex gap-4 mx-5">
        <Link
          to="/portfolio/ticket"
          className="bg-neob-green-600 text-white hover:text-white hover:bg-emerald-600 py-1 px-2 border rounded-lg"
        >
          Create Ticket
        </Link>
        <Link
          to="/portfolio/history"
          className="bg-neob-green-600 text-white hover:text-white hover:bg-emerald-600 py-1 px-2 border rounded-lg"
        >
          Transaction History
        </Link>
      </div>
      <PortfolioTable />
    </div>
  );
};

export default Portfolio;
