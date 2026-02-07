import React from "react";
import Wrapper from "./Wrapper";

const TotalExpence = () => {
  return (
    <div className="flex flex-col items-center bg-(--expense-card-bg) border-2 border-(--expense-card-border) px-25 py-5 rounded-md">
      <h2 className="text-3xl text-(--expense-card-text)">Expence</h2>
      <p className="text-(--expense-card-amount) text-3xl">₹{0}</p>
    </div>
  );
};

export default TotalExpence;
