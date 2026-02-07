import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <div className="bg-[#2a395c]">
      <Wrapper>
        <div className="flex justify-between items-center text-2xl   py-2">
          <h1 className="text-(--heading-text)">Expence Tracker</h1>
          <h1>
            <span className="text-(--main-balance-text)">Balance</span>{" "}
            <span className="text-(--main-amount-text)">₹5000</span>
          </h1>
          <div>
            <button className="px-6 py-1 bg-(--primary-add-btn-bg) rounded-md hover:bg-(--primary-add-btn-hover) text-(--main-balance-text)">
              Add
            </button>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
