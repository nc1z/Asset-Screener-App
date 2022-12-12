import React from "react";

const ErrorDisplay = ({ error }) => {
  return (
    <div className="container mx-auto flex flex-col text-center gap-4 mt-36 font-bold">
      <h1>ERROR</h1>
      <p>{error}</p>
      <a href="/home">Return Home</a>
    </div>
  );
};

export default ErrorDisplay;
