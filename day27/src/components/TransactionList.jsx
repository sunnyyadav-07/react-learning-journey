import React from "react";

const TransactionList = () => {
  return (
    <div className="mt-10">
      <h2 className="text-2xl text-white mb-2">Transactions</h2>
      <div className="bg-(--transaction-list-bg) border-2 border-(--transaction-list-border) flex justify-between items-center p-2  rounded-md ">
        <div>
          <h2 className="text-(--transaction-list-title-text) text-2xl">
            Pocket money
          </h2>
          <p className="text-(--transaction-list-date-text)">2026-02-06</p>
        </div>
        <p className="text-2xl">₹5000</p>
        <button className="bg-(--remove-btn-bg) text-(--remove-btn-text) hover:bg-(--remove-btn-hover) text-2xl px-4 py-2 rounded-md">
          remove
        </button>
      </div>
    </div>
  );
};

export default TransactionList;
