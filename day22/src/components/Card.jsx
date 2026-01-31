import React from "react";
import { Link } from "react-router-dom";

const Card = ({ data }) => {
  return (
    <Link
      to={`${data.id}`}
      className="bg-[#e1dede] rounded-md p-4 space-y-2 shadow-[#505050] shadow-lg group"
    >
      <div className="w-80">
        <img
          src={data.image}
          alt=""
          className="aspect-square w-full group-hover:-translate-y-10 transition-all duration-200 "
        />
      </div>
      <div>
        <p className="text-2xl font-medium group-hover:text-blue-600">
          {data.category}
        </p>
        <p className="line-clamp-2 text-xl font-medium text-[#323030] group-hover:text-blue-600  ">
          {data.title}
        </p>
      </div>
      <div className="flex gap-5 items-center ">
        <p className="bg-green-500 px-3 rounded-md">⭐{data.rating.rate}</p>
        <p className="text-xl font-medium">{data.rating.count}</p>
      </div>
      <div>
        <p className="text-xl font-mono">₹{data.price}</p>
      </div>
    </Link>
  );
};

export default Card;
