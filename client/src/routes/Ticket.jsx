import React from "react";
import TicketForm from "../components/TicketForm";

const Ticket = () => {
  return (
    <div className="container flex flex-col gap-2 md:flex-row mx-auto my-20 md:my-32 items-center justify-center">
      <img src="/images/undraw-btc.svg" className="w-2/3 h-1/2 md:w-1/2" />
      <TicketForm />
    </div>
  );
};

export default Ticket;
