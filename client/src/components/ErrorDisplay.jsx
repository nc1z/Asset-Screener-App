import React from "react";

const ErrorDisplay = ({ error }) => {
  if (Array.isArray(error)) {
    return (
      <div className="container mx-auto flex flex-col text-center gap-4 mt-36 font-bold">
        <h1>ERROR</h1>
        {error.map((err, idx) => (
          <div
            key={idx}
            className="max-w-max mx-auto mt-3 text-white uppercase bg-red-500/80 font-medium"
          >
            {err.msg}
          </div>
        ))}
        <a href="/home">Return Home</a>
      </div>
    );
  }

  return (
    <div className="container mx-auto flex flex-col text-center gap-4 mt-36 font-bold">
      <h1>ERROR</h1>
      <p>{error}</p>
      <a href="/home">Return Home</a>
    </div>
  );
};

export default ErrorDisplay;
