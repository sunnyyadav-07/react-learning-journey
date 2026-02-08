import React, { useState } from "react";
import useMyStore from "../store/store";

const SearchTransaction = () => {
  const searchedDate = useMyStore((state) => state.searchedDate);
  const setSearchedDate = useMyStore((state) => state.setSearchedDate);
  function handleSearch(e) {
    setSearchedDate(e.target.value);
  }
  return (
    <div className="mb-12 flex gap-4 mt-10">
      <input
        type="date"
        name="search"
        value={searchedDate}
        placeholder="search transactions according to date..."
        className="w-full bg-(--search-bg) text-(--search-text) border-2 border-(--search-border) text-xl px-6 py-3 rounded-lg focus:outline-(--search-focus) placeholder-(--search-placeholder)"
        onChange={handleSearch}
      />
      {/* <button className="px-4 py-1 rounded-lg cursor-pointer active:scale-95 bg-(--primary-add-btn-bg) hover:bg-(--primary-add-btn-hover) text-(--primary-add-btn-text) whitespace-nowrap text-2xl font-medium">
        Search
      </button> */}
    </div>
  );
};

export default SearchTransaction;
