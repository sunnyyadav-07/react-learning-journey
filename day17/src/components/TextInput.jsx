import React from "react";

const TextInput = ({ value, onChange, label, placeholder, type }) => {
  console.log('input render')
  return (
    <div className="flex items-center gap-2.5 text-2xl">
      <label htmlFor={label}>{label.toUpperCase()} :</label>
      <input
        id={label}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
        className="bg-black py-2 px-4"
      />
    </div>
  );
};

export default TextInput;
