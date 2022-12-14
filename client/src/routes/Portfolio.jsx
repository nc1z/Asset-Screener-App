import React from "react";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="mt-36">
      <div>Total Portfolio Value here + line or pie chart</div>
      <div>Portfolio Assets here</div>
      <Link to="/portfolio/ticket">Create Ticket</Link>
    </div>
  );
};

export default Portfolio;
