import React from "react";
import { useState } from "react";

const PortfolioTable = () => {
  const [portfolio, setPortfolio] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const { data: response } = await axios.get(
        "http://localhost:8080/details/portfolio"
      );
      if (response.data) {
        return setPortfolio(response.data);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!portfolio) {
    return (
      <div className="container mx-auto flex justify-center mt-36">
        <LoadingIcon />
      </div>
    );
  }
  return (
    <table className="w-full my-20 text-sm text-left text-gray-700 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900">
        Your Portfolio
        <p className="mt-1 text-sm font-normal text-gray-700">
          Browse a list of your assets
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase">
        <tr>
          <th className="px-4 py-2">Asset</th>
          <th className="px-4 py-2">Current Price</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Current Value</th>
          <th className="px-4 py-2">Latest Ticket</th>
        </tr>
      </thead>
      <tbody>
        {portfolio &&
          portfolio.currentAssets.map((asset) => (
            <tr
              key={asset}
              className="border-b border-slate-500/20 text-gray-800 hover:bg-gray-500/10"
            >
              <td className="px-4 py-2">{asset.name}</td>
              <td className="px-4 py-2">$To be updated</td>
              <td className="px-4 py-2">{asset.value}</td>
              <td className="px-4 py-2">price x value</td>
              <td className="px-4 py-2">
                {portfolio.tickets[portfolio.tickets.length - 1]}
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default PortfolioTable;
