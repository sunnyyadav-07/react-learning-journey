import React from "react";

const SelectInput = ({value,handleChange,error}) => {
  const countries = ["India", "USA", "Canada"];
  return (
    <div>
      <label className="block font-medium mb-1">Country</label>
      <select
        name="country"
        value={value}
        onChange={handleChange}
        className="w-full border rounded-md px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Country</option>
        {countries.map((item) => (
          <option key={item} value={item.toLowerCase()}>
            {item}
          </option>
        ))}
      </select>
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default SelectInput;
