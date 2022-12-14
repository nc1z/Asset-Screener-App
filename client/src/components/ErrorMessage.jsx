import React from "react";

const ErrorMessage = ({ error }) => {
  return (
    <div className="max-w-max mx-auto mt-3 text-white uppercase bg-red-500/80 font-medium">
      {error}
    </div>
  );
};

export default ErrorMessage;
