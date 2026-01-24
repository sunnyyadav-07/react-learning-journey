import React from "react";

const DatePicker = ({ value, onChange }) => {
  return (
    <div className="flex gap-5">
      <p>choose date : </p>
      <input
        type="date"
        value={value || ""}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
    </div>
  );
};

export default DatePicker;
