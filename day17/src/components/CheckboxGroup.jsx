import React, { Children } from "react";

const CheckboxGroup = ({ value, onChange }) => {
  const skills = ["React", "JavaScript", "CSS", "HTML"];

  return (
    <div className="flex gap-4 items-center">
      {skills.map((item) => (
        <div key={item} className="flex gap-1.5 items-center">
          <label htmlFor={item.toLowerCase()}>{item}</label>
          <input
            type="checkbox"
            checked={value.includes(item)}
            onChange={(e) => {
              // console.log(value.includes(item));
              const checked = e.target.checked;
              console.log(checked);
              if (checked) {
                onChange([...value, item]);
              } else {
                onChange(value.filter((el) => el !== item));
              }
            }}
            id={item.toLowerCase()}
          />
        </div>
      ))}
    </div>
  );
};

export default CheckboxGroup;
