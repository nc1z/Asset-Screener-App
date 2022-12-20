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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitTicket = async () => {
    setLoading(true);
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
      setLoading(false);
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
            disabled={loading ? true : false}
            className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-neob-green-400 hover:bg-neob-green-600 ${
              loading ? "bg-emerald-800 hover:cursor-not-allowed" : ""
            }`}
          >
            {loading ? (
              <>
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5 text-gray-200 animate-spin fill-black"
                    viewBox="0 0 100 101"
                    fill="none"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                </span>
                <span className="text-white">Submitting...</span>
              </>
            ) : (
              "Submit Ticket"
            )}
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
