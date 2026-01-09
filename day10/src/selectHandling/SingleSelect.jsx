import React from "react";
import { useState } from "react";
const SingleSelect = () => {
  const [skills, setSkills] = useState("");

  console.log(skills);
  return (
    <>
      <select
        value={skills}
        onChange={(e) => {
          setSkills(e.target.value);
        }}
        name="skills"
        id="skills"
        style={{ fontSize: "2rem" }}
      >
        <option value="">Select skill</option>
        <option value="css">CSS</option>
        <option value="js">JS</option>
        <option value="react">React</option>
      </select>
    </>
  );
};

export default SingleSelect;
