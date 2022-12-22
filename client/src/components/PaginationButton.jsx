import React from "react";
import { useState } from "react";

const PaginationButton = ({ page, setPage, value }) => {
  return (
    <button
      value={value}
      onClick={(e) => setPage(e.target.value)}
      className={`px-3 py-2 leading-tight ${
        page == value &&
        "bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700"
      } text-gray-500 bg-white border rounded-none border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
    >
      1
    </button>
  );
};

export default PaginationButton;
