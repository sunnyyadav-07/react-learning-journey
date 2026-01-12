import React, { useState } from "react";
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import Button from "./Button";

const Form = () => {
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    pass: "",
    confPass: "",
    gender: "",
    skills: { html: false, css: false, javascript: false, react: false },
    country: "",
    picture: null,
  });
  console.log(formData);
  function handleChange(e) {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }
  return (
    <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Registration Form
      </h1>
      <form className="space-y-3">
        <TextInput
          type="text"
          name="userName"
          label="Full Name "
          value={formData.userName}
          placeholder="Enter your name"
          handleChange={handleChange}
        />
        <TextInput
          type="email"
          name="email"
          label="Email "
          value={formData.email}
          placeholder="Enter your email"
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="pass"
          label="Password "
          value={formData.pass}
          placeholder="********"
          autoComplete="new-password"
          handleChange={handleChange}
        />
        <TextInput
          type="password"
          name="confPass"
          label="Confirm Password "
          value={formData.confPass}
          placeholder="********"
          autoComplete="new-password"
          handleChange={handleChange}
        />
        <RadioGroup value={formData.gender} handleChange={handleChange} />
        <CheckboxGroup checked={formData.skills} handleChange={handleChange} />
        <SelectInput value={formData.country} handleChange={handleChange} />
        <FileInput handleChange={handleChange} />
        <Button value="Submit" />
      </form>
    </div>
  );
};

export default Form;
