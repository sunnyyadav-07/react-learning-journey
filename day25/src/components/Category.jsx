import React from "react";
import Wrapper from "./Wrapper";
import { useNewsContext } from "../context/NewsContext";

const Category = ({className}) => {
  const categories = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  const { fetchNews } = useNewsContext();
  function handleClick(e) {
    fetchNews(`/everything?q=${e.target.value}`);
  }
  return (
    <div className={`${className} bg-base-100 py-5`}>
      <Wrapper>
        <div className="w-fit m-auto flex gap-4 max-w-full overflow-x-auto px-4 scolbar-hidden">
          {categories.map((category) => (
            <button
              value={category}
              key={category}
              className="btn btn-soft   btn-primary"
              onClick={handleClick}
            >
              {category}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
