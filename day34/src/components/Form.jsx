import { useEffect, useState } from "react";

const Form = () => {
  const [value, setValue] = useState(localStorage.getItem("name") || "");
  useEffect(() => {
    console.log("Form mounted.....");
  }, []);
  useEffect(() => {
    console.log("Form updating.....");
  }, [value]);
  useEffect(() => {
    return () => {
      console.log("Form unmounted.....");
      localStorage.clear()
    };
  }, []);
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => {
        const newValue = e.target.value;
        setValue(newValue);
        localStorage.setItem("name", newValue);
        }}
      />
    </div>
  );
};

export default Form;
