import React from "react";

const TextInput = ({
  type,
  placeholder,
  name,
  label,
  value,
  handleChange,
  error,
  autoComplete,
}) => {
  return (
    <div>
      <label className="block font-medium mb-1" htmlFor={name}>
        {label}
      </label>
      <input
        name={name}
        id={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full border rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default TextInput;
