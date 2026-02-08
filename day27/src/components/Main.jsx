import React from "react";
import TotalExpense from "./TotalExpense";
import TotalIncome from "./TotalIncome";
import TransactionList from "./TransactionList";
import Wrapper from "./Wrapper";
import SearchTransaction from "./SearchTransaction";

const Main = () => {
  return (
    <Wrapper>
      <div>
        <div className="flex justify-between items-center pt-30">
          <TotalExpense />
          <TotalIncome />
        </div>
        <SearchTransaction/>
        <TransactionList />
      </div>
    </Wrapper>
  );
};

export default Main;
