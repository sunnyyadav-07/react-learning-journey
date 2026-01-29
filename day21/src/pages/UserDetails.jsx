import React from "react";
import { useParams } from "react-router-dom";

const UserDetails = () => {
  const { id } = useParams();
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-150">
      <h1 className="text-6xl text-white">User detailed page </h1>
      <p className="text-5xl  text-white">User ID: {id}</p>
    </div>
  );
};

export default UserDetails;
