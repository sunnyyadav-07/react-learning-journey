import { useState } from "react";
const SingleCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  console.log(isChecked);
  return (
    <>
      <label htmlFor="tc" style={{ fontSize: "2rem" }}>
        <input
          id="tc"
          type="checkbox"
          checked={isChecked}
          name="tc"
          onChange={(e) => {
            setIsChecked(e.target.checked);
          }}
          style={{ scale: "2" }}
        />
        Term and condition
      </label>
    </>
  );
}

export default SingleCheckbox
