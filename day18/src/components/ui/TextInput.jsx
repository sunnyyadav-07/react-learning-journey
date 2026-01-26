import React from "react";

const TextInput = ({ type, placeholder, label,value,onChange }) => {
  return (
    <div>
      <label htmlFor={label} className="block text-2xl font-medium mb-2">{label}</label>
      <input type={type} id={label} placeholder={placeholder} className="bg-[#585656] text-white px-4 py-2 w-full rounded-md outline-0 hover:outline-2 hover:outline-white border-0 focus:outline-3 focus:outline-amber-100" value={value} onChange={e=>{onChange(e.target.value)}} />
    </div>
  );
};

export default TextInput;
