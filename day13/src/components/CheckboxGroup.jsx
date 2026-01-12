import React from "react";

const CheckboxGroup = ({checked,handleChange}) => {
  const skillsData = ["HTML", "CSS", "JavaScript", "React"];
  return (
    <div>
      <label className="block font-medium mb-2">Skills</label>
      <div className="flex flex-wrap gap-4">
        {skillsData.map((item) => (
          <label className="flex items-center gap-2" key={item}>
            <input
              type="checkbox"
              name={item.toLowerCase()}
              className="accent-blue-600"
              checked={checked[item.toLowerCase()]}
              onChange={handleChange}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default CheckboxGroup;
