import React from "react";
import PaginationButton from "./PaginationButton";

const Pagination = ({ page, setPage }) => {
  return (
    <nav>
      <ul className={`inline-flex -space-x-px`}>
        <li>
          <button
            onClick={() => page > 1 && setPage((page - 1).toString())}
            className={`px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg rounded-r-none hover:bg-gray-100 hover:text-gray-700`}
          >
            Previous
          </button>
        </li>
        <li>
          <PaginationButton page={page} setPage={setPage} value={"1"} />
        </li>
        <li>
          <PaginationButton page={page} setPage={setPage} value={"2"} />
        </li>
        <li>
          <PaginationButton page={page} setPage={setPage} value={"3"} />
        </li>
        <li>
          <PaginationButton page={page} setPage={setPage} value={"4"} />
        </li>
        <li>
          <PaginationButton page={page} setPage={setPage} value={"5"} />
        </li>
        <li>
          <button
            onClick={() => page < 5 && setPage((parseInt(page) + 1).toString())}
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
