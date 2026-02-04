import { useEffect, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Navbar = ({ className }) => {
  const { fetchNews } = useNewsContext();
  const timeOutId = useRef(null);

  function searchNews(e) {
    const searchedNews = e.target.value;
    if (!searchedNews && timeOutId.current) {
      console.log("nav");
      fetchNews();
      return;
    }
    clearTimeout(timeOutId.current);

    timeOutId.current = setTimeout(() => {
      fetchNews(`/everything?q=${searchedNews}`);
    }, 1000);
  }

  return (
    <div className={`bg-base-300  ${className}`}>
      <Wrapper>
        <div className="navbar  shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">News App</a>
          </div>
          <div className="flex gap-2 pr-3.5">
            <input
              type="text"
              placeholder="Search"
              onChange={searchNews}
              className="input input-bordered w-24 md:w-auto"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Navbar;
