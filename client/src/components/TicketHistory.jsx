import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import LoadingIcon from "./LoadingIcon";
import { Link } from "react-router-dom";

const TicketHistory = () => {
  const [tickets, setTickets] = useState("");
  const [error, setError] = useState("");

  const FetchPortfolio = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:8080/details/portfolio"
      );
      if (response.data) {
        return setTickets(response.data.tickets);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    FetchPortfolio();
  }, []);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!tickets) {
    return (
      <div className="container mx-auto flex justify-center mt-36">
        <LoadingIcon />
      </div>
    );
  }
  return (
    <div className="container mx-auto my-20 flex flex-col">
      <Link to="/portfolio">Back</Link>
      <Link to="/portfolio/ticket">New Ticket</Link>
      <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
        <caption className="p-5 text-3xl font-semibold text-left text-gray-900">
          Transaction history
          <p className="mt-1 text-sm font-normal text-gray-700">
            Browse a list of your tickets below
          </p>
        </caption>
        <thead className="text-xs text-gray-700 uppercase">
          <tr>
            <th className="px-4 py-2">Asset</th>
            <th className="px-4 py-2">Order</th>
            <th className="px-4 py-2">Quantity</th>
            <th className="px-4 py-2">Date/Time of Execution</th>
            <th className="px-4 py-2">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {tickets &&
            tickets
              .map((ticket) => (
                <tr
                  key={ticket.ticketid}
                  className="border-b border-slate-500/20 text-gray-800 hover:bg-gray-500/10"
                >
                  <td className="px-4 py-2">{ticket.asset}</td>
                  <td className="px-4 py-2">{ticket.order}</td>
                  <td className="px-4 py-2">{ticket.amount}</td>
                  <td className="px-4 py-2">{ticket.datetime}</td>
                  <td className="px-4 py-2">{ticket.ticketid}</td>
                </tr>
              ))
              .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default TicketHistory;
