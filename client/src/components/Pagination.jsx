import React from "react";

const Pagination = ({ page, setPage }) => {
  return (
    <nav>
      <ul className={`inline-flex -space-x-px`}>
        <li>
          <button
            className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg rounded-r-none hover:bg-gray-100 hover:text-gray-700`}
          >
            Previous
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border rounded-none border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            1
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border rounded-none border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            2
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700 border rounded-none border-gray-300`}
          >
            3
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border rounded-none border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            4
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border rounded-none border-gray-300 hover:bg-gray-100 hover:text-gray-700`}
          >
            5
          </button>
        </li>
        <li>
          <button
            className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-none rounded-r-lg hover:bg-gray-100 hover:text-gray-700`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
