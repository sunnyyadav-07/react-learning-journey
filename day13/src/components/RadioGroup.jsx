import React from "react";

const RadioGroup = ({ value, handleChange ,error}) => {
  return (
    <div>
      <label className="block font-medium mb-2">Gender</label>
      <div className="flex gap-6">
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            checked={value === "male"}
            value={"male"}
            className="accent-blue-600"
            onChange={handleChange}
          />
          Male
        </label>
        <label className="flex items-center gap-2">
          <input
            type="radio"
            name="gender"
            checked={value === "female"}
            value={"female"}
            className="accent-blue-600"
            onChange={handleChange}
          />
          Female
        </label>
      </div>
        {error && <p className="text-red-600 ">{error}</p>}
    </div>
  );
};

export default RadioGroup;
