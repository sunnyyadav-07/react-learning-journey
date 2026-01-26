import React from "react";

const Step3 = ({data}) => {
  return (
    <div className="text-[#352f2f] text-xl">
      <h3 className="font-bold mb-2 text-3xl">Review Your Info</h3>

      <p>
        <b>Name :</b> {data.name}
      </p>
      <p>
        <b>Email :</b> {data.email}
      </p>
      <p>
        <b>Skills :</b> {data.skills.join(', ')}
      </p>
      <p>
        <b>Date :</b> {data.date}
      </p>
    </div>
  );
};

export default Step3;
