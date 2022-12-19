import axios from "axios";
import React, { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";
import ErrorDisplay from "./ErrorDisplay";
import LoadingIcon from "./LoadingIcon";

const PortfolioTable = () => {
  const show = useRef(false);
  const [portfolio, setPortfolio] = useState("");
  const [portfolioValue, setPortfolioValue] = useState(0);
  const [error, setError] = useState("");
  const [marketData, setMarketData] = useState("");

  const fetchPortfolio = async () => {
    try {
      const { data: response } = await axios.get(
        "https://good-gray-dugong-yoke.cyclic.app/details/portfolio"
      );
      if (response.data) {
        setPortfolio(response.data);
        fetchPrice();
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const fetchPrice = async () => {
    try {
      const { data: response } = await axios.get(
        "https://good-gray-dugong-yoke.cyclic.app/markets/crypto"
      );
      if (response.data) {
        setMarketData(response.data);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const portfolioCalculation = () => {
    const totalPortfolioValue = portfolio.currentAssets.reduce(
      (total, asset) => {
        switch (asset.name) {
          case "BTC":
            const dataBTC = marketData.filter((coin) => coin.symbol === "btc");
            return total + asset.value * dataBTC[0].current_price;
          case "ETH":
            const dataETH = marketData.filter((coin) => coin.symbol === "eth");
            return total + asset.value * dataETH[0].current_price;
          case "USDT":
            const dataUSDT = marketData.filter(
              (coin) => coin.symbol === "usdt"
            );
            return total + asset.value * dataUSDT[0].current_price;
          default:
            return total;
        }
      },
      0
    );
    setPortfolioValue(totalPortfolioValue);
    show.current = true;
  };

  useEffect(() => {
    fetchPortfolio();
  }, []);

  useEffect(() => {
    if (portfolio && marketData) {
      portfolioCalculation();
    }
  }, [marketData]);

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  if (!show) {
    return (
      <div className="container mx-auto flex justify-center mt-36">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <>
      <div className="flex h-1/3 md:justify-evenly md:items-center md:mb-12">
        <div className="p-5 text-3xl font-semibold text-left text-gray-900">
          <h2>My Portfolio: ${portfolio && portfolioValue.toFixed(2)}</h2>
          <p className="mt-1 text-sm font-normal text-gray-700">
            Browse a list of your assets below
          </p>
        </div>
        <div className="mb-2 hidden md:block">
          <img src="../../images/undraw-savings.svg" className="w-80" />
        </div>
      </div>
      <div className="overflow-x-auto px-5">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th className="px-4 py-2">Asset</th>
              <th className="px-4 py-2">Total Quantity</th>
              <th className="px-4 py-2">Last Price (USD)</th>
              <th className="px-4 py-2">Notional Value (USD)</th>
              <th className="px-4 py-2">Latest Ticket</th>
            </tr>
          </thead>
          <tbody>
            {portfolio &&
              portfolio.currentAssets.map((asset) => (
                <tr
                  key={asset.name}
                  className="border-b border-slate-500/20 text-gray-800 hover:bg-gray-500/10"
                >
                  <td className="px-4 py-2">{asset.name}</td>
                  <td className="px-4 py-2">{asset.value}</td>
                  <td className="px-4 py-2">
                    {marketData &&
                      marketData.filter(
                        (coin) => coin.symbol.toUpperCase() === asset.name
                      )[0].current_price}
                  </td>
                  <td className="px-4 py-2">
                    {marketData
                      ? (
                          marketData.filter(
                            (coin) => coin.symbol.toUpperCase() === asset.name
                          )[0].current_price * asset.value
                        ).toFixed(2)
                      : 0}
                  </td>
                  <td className="px-4 py-2">
                    {portfolio.tickets
                      .filter((ticket) => ticket.asset === asset.name)
                      .slice(-1)[0]?.ticketid
                      ? portfolio.tickets
                          .filter((ticket) => ticket.asset === asset.name)
                          .slice(-1)[0]?.ticketid
                      : "-"}
                  </td>
                </tr>
              ))}
            <tr className="border-t border-gray-800 text-gray-800 font-bold hover:bg-gray-500/10">
              <td className="px-4 py-2">TOTAL</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">-</td>
              <td className="px-4 py-2">{portfolioValue.toFixed(2)}</td>
              <td className="px-4 py-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PortfolioTable;
