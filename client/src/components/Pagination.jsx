import React from "react";

const Pagination = () => {
  return (
    <div>
      <nav>
        <ul class="inline-flex -space-x-px">
          <li>
            <span class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
              Previous
            </span>
          </li>
          <li>
            <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              1
            </span>
          </li>
          <li>
            <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              2
            </span>
          </li>
          <li>
            <span class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700">
              3
            </span>
          </li>
          <li>
            <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              4
            </span>
          </li>
          <li>
            <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">
              5
            </span>
          </li>
          <li>
            <span class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
              Next
            </span>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
