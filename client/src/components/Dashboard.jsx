import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Saved from "./Saved";

const Dashboard = () => {
  const [assets, setAssets] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    // TODO: Change shift gecko endpoint to backend & replace with server api
    try {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=50&page=1&sparkline=false"
      );

      if (response.data) {
        setAssets(response.data);
      }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (!assets) {
    return <div>loading...</div>;
  }

  return (
    <table className="w-full my-20 text-sm text-left text-gray-700 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900">
        Crypto Dashboard
        <p className="mt-1 text-sm font-normal text-gray-700">
          Browse a list of Cryptocurrency assets, powered by the{" "}
          <a
            href="https://www.coingecko.com/en/api/documentation"
            target="_blank"
          >
            Coingecko Api
          </a>
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase">
        <tr>
          <th className="px-4 py-2">Symbol</th>
          <th className="px-4 py-2">Ticker</th>
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2">Current Price</th>
          <th className="px-4 py-2">Price Change (24h)</th>
          <th className="px-4 py-2">Market Cap</th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {assets &&
          assets.map((asset) => (
            <tr
              key={asset.id}
              className="border-b border-slate-500/20 text-gray-800"
            >
              <td className="px-4 py-2">{asset.name}</td>
              <td className="px-4 py-2 uppercase">{asset.symbol}</td>
              <td className="px-4 py-2">
                <img src={asset.image} className="w-8" />
              </td>
              <td className="px-4 py-2">${asset.current_price}</td>
              <td
                className="px-4 py-2"
                style={
                  asset.price_change_24h < 0
                    ? { color: "red" }
                    : { color: "green" }
                }
              >
                {asset.price_change_24h.toFixed(7)}
              </td>
              <td className="px-4 py-2">
                ${asset.market_cap.toLocaleString()}
              </td>
              <td className="px-4 py-2">
                <Saved />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Dashboard;