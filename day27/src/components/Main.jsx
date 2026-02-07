import React from "react";
import TotalExpence from "./TotalExpence";
import TotalIncome from "./TotalIncome";
import TransactionList from "./TransactionList";
import Wrapper from "./Wrapper";

const Main = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-between mt-20">
          <TotalExpence />
          <TotalIncome />
        </div>
        <TransactionList />
      </div>
    </Wrapper>
  );
};

export default Main;
