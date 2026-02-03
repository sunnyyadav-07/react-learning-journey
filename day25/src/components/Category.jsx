import React from "react";
import Wrapper from "./Wrapper";

const Category = () => {
  const categories = [
    "bussines",
    "entertainment",
    "general",
    "health",
    "sports",
    "science",
    "technology",
  ];
  return (
    <div className="">
      <Wrapper>
        <div className="w-fit m-auto flex gap-4">
          {categories.map((category) => (
            <button key={category} className="btn btn-soft  btn-primary">
              {category}
            </button>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
