import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import LoadingIcon from "./LoadingIcon";
import { Link } from "react-router-dom";

const TicketHistory = () => {
  const [tickets, setTickets] = useState("");
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const FetchPortfolio = async () => {
    try {
      const { data: response } = await axios.get(
        "https://good-gray-dugong-yoke.cyclic.app/details/portfolio"
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
    <div className="container mx-auto my-20">
      <div className="flex gap-4 mx-5">
        <Link
          to="/portfolio"
          className="bg-neob-green-600 text-white hover:text-white hover:bg-emerald-600 py-1 px-2 border rounded-lg"
        >
          My Portfolio
        </Link>
        <Link
          to="/portfolio/ticket"
          className="bg-neob-green-600 text-white hover:text-white hover:bg-emerald-600 py-1 px-2 border rounded-lg"
        >
          New Ticket
        </Link>
      </div>
      <div className="flex flex-col md:flex-row justify-start md:justify-between items-start md:items-center mr-5">
        <div className="p-5 text-3xl font-semibold text-left text-gray-900">
          <h2>Transaction history</h2>
          <p className="mt-1 text-sm font-normal text-gray-700">
            Browse a list of your tickets below
          </p>
        </div>
        <div className="p-10 md:p-0">
          <input
            type="text"
            placeholder="Search Tickets"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
        </div>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
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
                .filter((ticket) => {
                  if (search === "") {
                    return ticket;
                  } else if (
                    ticket.asset.toLowerCase().includes(search.toLowerCase()) ||
                    ticket.order.toLowerCase().includes(search.toLowerCase()) ||
                    ticket.datetime
                      .toLowerCase()
                      .includes(search.toLowerCase()) ||
                    ticket.ticketid.toLowerCase().includes(search.toLowerCase())
                  ) {
                    return ticket;
                  }
                })
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
    </div>
  );
};

export default TicketHistory;
