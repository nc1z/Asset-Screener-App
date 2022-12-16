import React from "react";
import { Link } from "react-router-dom";
import PortfolioTable from "../components/PortfolioTable";

const Portfolio = () => {
  return (
    <div className="mt-36">
      <div>Total Portfolio Value here + line or pie chart</div>
      <Link to="/portfolio/ticket">Create Ticket</Link>
      <PortfolioTable />
    </div>
  );
};

export default Portfolio;
