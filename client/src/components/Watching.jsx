import React, { useState } from "react";
import { useEffect } from "react";
import ErrorDisplay from "./ErrorDisplay";
import { MdDelete } from "react-icons/md";
import LoadingIcon from "./LoadingIcon";
import axios from "axios";
import notify from "../functions/notify";

const Watching = () => {
  const [assets, setAssets] = useState("");
  const [error, setError] = useState("");

  const handleFetch = async () => {
    try {
      const { data: response } = await axios.get(
        "https://good-gray-dugong-yoke.cyclic.app/details/watchlist"
      );
      if (response.data) {
        setAssets(response.data.items);
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.error);
      setError(error.response.data.error);
    }
  };

  const handleDelete = async (asset) => {
    try {
      const { data: response } = await axios.delete(
        "https://good-gray-dugong-yoke.cyclic.app/details/watchlist",
        {
          data: {
            symbol: asset.symbol,
            coin: asset.coin,
            image: asset.image,
          },
        }
      );

      if (response.data) {
        setAssets(response.data.items);
        notify({
          success: "Removed from watchlist",
          error: "",
        });
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
      notify({
        success: "",
        error: error.response.data.error,
      });
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
    <>
      <div className="overflow-x-auto px-5 w-full">
        <table className="w-full text-sm text-left text-gray-700 dark:text-gray-400">
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
                  key={asset.coin}
                  className="border-b border-slate-500/20 text-gray-800 hover:bg-gray-500/10"
                >
                  <td className="px-4 py-2">{asset.coin}</td>
                  <td className="px-4 py-2 uppercase">{asset.symbol}</td>
                  <td className="px-4 py-2">
                    <img src={asset.image} className="w-8" />
                  </td>

                  <td className="px-4 py-2">
                    <MdDelete
                      onClick={() => handleDelete(asset)}
                      className="cursor-pointer"
                    />
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watching;
