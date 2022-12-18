import React from "react";
import { Link } from "react-router-dom";
import PortfolioTable from "../components/PortfolioTable";

const Portfolio = () => {
  return (
    <div className="mt-36">
      <div>Total Portfolio Value here + line or pie chart</div>
      <div className="flex gap-4">
        <Link to="/portfolio/ticket">Create Ticket</Link>
        <Link to="/portfolio/history">Transaction History</Link>
      </div>
      <PortfolioTable />
    </div>
  );
};

export default Portfolio;
