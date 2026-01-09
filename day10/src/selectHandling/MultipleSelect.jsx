import React from 'react'
import { useState } from 'react'
const MultipleSelect = () => {
  const skillsData = ["java", "mongodb", "react", "js", "express", "node"];
  const [formData, setFormData] = useState({
    skills: [],
  });
  console.log(formData);
  function handleSelect(e) {
    const selectedValues = Array.from(
      e.target.selectedOptions,
      (option) => option.value
    );
    // console.log(selectedValues);
    // console.log(e.target.selectedOptions);
    setFormData((prev) => ({ ...prev, skills: selectedValues }));
  }
  return (
    <>
      <select
        multiple
        name="skills"
        value={formData.skills}
        onChange={handleSelect}
        size={6}
        style={{ fontSize: "2rem" }}
      >
        {skillsData.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </>
  );
}

export default MultipleSelect
