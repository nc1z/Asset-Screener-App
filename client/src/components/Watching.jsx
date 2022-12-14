import React, { useState } from "react";
import { useEffect } from "react";
import ErrorDisplay from "./ErrorDisplay";
import { MdDelete } from "react-icons/md";
import LoadingIcon from "./LoadingIcon";

const Watching = () => {
  const [assets, setAssets] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      // const response = await axios.get("Backend GET watchlist endpoing");
      // if (response.data) {
      //   setAssets(response.data);
      // }
    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  };

  useEffect(() => {
    handleFetch();
  }, []);

  if (!assets) {
    return (
      <div className="container mx-auto flex justify-center mt-36">
        <LoadingIcon />
      </div>
    );
  }

  if (error) {
    return <ErrorDisplay error={error} />;
  }

  return (
    <table className="w-full my-20 text-sm text-left text-gray-700 dark:text-gray-400">
      <caption className="p-5 text-lg font-semibold text-left text-gray-900">
        Your Watchlist
        <p className="mt-1 text-sm font-normal text-gray-700">
          Browse a list of your saved assets
        </p>
      </caption>
      <thead className="text-xs text-gray-700 uppercase">
        <tr>
          <th className="px-4 py-2">Symbol</th>
          <th className="px-4 py-2">Ticker</th>
          <th className="px-4 py-2"></th>
          <th className="px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        {assets &&
          assets.map((asset) => (
            <tr
              key={asset.id}
              className="border-b border-slate-500/20 text-gray-800 hover:bg-gray-500/10"
            >
              <td className="px-4 py-2">{asset.coin}</td>
              <td className="px-4 py-2 uppercase">{asset.symbol}</td>
              <td className="px-4 py-2">
                <img src={asset.image} className="w-8" />
              </td>

              <td className="px-4 py-2">
                <MdDelete />
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Watching;
