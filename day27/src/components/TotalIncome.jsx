import React from "react";
import Wrapper from "./Wrapper";

const TotalIncome = () => {
  return (
    <div className="flex flex-col items-center bg-(--income-card-bg) border-2 border-(--income-card-border) px-25 py-5 rounded-md">
      <h2 className="text-3xl text-(--income-card-text)">Expence</h2>
      <p className="text-(--income-card-amount) text-3xl">₹{0}</p>
    </div>
  );
};

export default TotalIncome;
