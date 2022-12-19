import React from "react";
import { useState } from "react";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";
import { useNavigate } from "react-router-dom";
import notify from "../functions/notify";

const TicketForm = () => {
  const [asset, setAsset] = useState("BTC");
  const [order, setOrder] = useState("Allocate");
  const [quantity, setQuantity] = useState(0);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitTicket = async () => {
    try {
      const { data: response } = await axios.put(
        "https://good-gray-dugong-yoke.cyclic.app/details/portfolio",
        {
          asset: asset,
          order: order,
          amount: quantity,
        }
      );
      if (response.data) {
        notify({
          success: "Success. Transaction completed.",
          error: "",
        });
        navigate("/portfolio/history");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data);
      setError(error.response.data.error);
      notify({
        success: "",
        error: `Transaction failed. ${error.message}`,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitTicket();
  };
  return (
    <div className="mx-auto max-w-sm">
      <h2 className="text-center mt-2 text-xl font-medium leading-7 sm:mt-3 sm:text-2xl">
        Create a Ticket
      </h2>
      {error && <ErrorMessage error={error} />}
      <form onSubmit={handleSubmit} className="p-4 md:p-0">
        <label
          htmlFor="TicketId"
          className="block text-sm font-medium leading-5 "
        >
          TicketId
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="TicketId"
            type="text"
            readOnly="readonly"
            placeholder="Auto-generated"
            className="read-only:bg-gray-100 form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none active:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:outline-none focus:border-slate-500"
          />
        </div>
        <label
          htmlFor="dateTime"
          className="block text-sm font-medium leading-5 mt-3"
        >
          Time & Date
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="dateTime"
            type="text"
            readOnly="readonly"
            placeholder="Auto-generated"
            className="read-only:bg-gray-100 form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none active:cursor-not-allowed focus:ring-0 focus:ring-transparent focus:outline-none focus:border-slate-500"
          />
        </div>
        <div className="flex gap-2">
          <div className="w-1/2">
            <label
              htmlFor="Asset"
              className="block text-sm font-medium leading-5 mt-3"
            >
              Asset
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <select
                id="asset"
                required
                onChange={(e) => setAsset(e.target.value)}
                className="block w-full h-8 border rounded-md bg-white focus:ring-0 focus:ring-transparent focus:outline-none"
              >
                <option value="">Choose Asset</option>
                <option value="BTC">BTC</option>
                <option value="ETH">ETH</option>
                <option value="USDT">USDT</option>
              </select>
            </div>
          </div>

          <div className="w-1/2">
            <label
              htmlFor="Order"
              className="block text-sm font-medium leading-5 mt-3"
            >
              Order Type
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
              <select
                id="Order"
                onChange={(e) => setOrder(e.target.value)}
                required
                className="block w-full h-8 border rounded-md bg-white focus:ring-0 focus:ring-transparent focus:outline-none"
              >
                <option value="">Select Transaction</option>
                <option value="Allocate">Allocate</option>
                <option value="Remove">Remove</option>
              </select>
            </div>
          </div>
        </div>
        <label
          htmlFor="Quantity"
          className="block text-sm font-medium leading-5 mt-3"
        >
          Quantity
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <input
            id="Quantity"
            type="number"
            step="0.01"
            min="0"
            placeholder="0.5"
            required
            onChange={(e) => setQuantity(e.target.value)}
            className="form-input py-3 px-4 block w-full transition duration-150 ease-in-out rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neob-green-400"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-neob-green-400 hover:bg-neob-green-600"
          >
            Submit Ticket
          </button>
        </div>
        <div className="mt-2">
          <button
            onClick={() => navigate("/portfolio/history")}
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-red-400 hover:bg-red-500"
          >
            Cancel Transaction
          </button>
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
