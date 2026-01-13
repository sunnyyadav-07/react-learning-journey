import React, { useState } from "react";
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import Button from "./Button";

const Form = () => {
  const [error, setError] = useState({});
  const [formData, setFormData] = useState({
    userName: "",
    email: "",
    pass: "",
    confPass: "",
    gender: "",
    skills: [],
    country: "",
    picture: null,
  });
  function handleChange(e) {
    const { name, value, type, files } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const data = formData.skills;
        console.log(data);
        const selectedSkill = data.includes(name)
          ? data.filter((item) => item !== name)
          : [...data, name];
        console.log(selectedSkill);
        return { ...prev, skills: selectedSkill };
      } else if (type === "file") {
        if (files.length) {
          return { ...prev, [name]: files[0] };
        }
      } else {
        return { ...prev, [name]: value };
      }
    });
  }
  console.log(error);
  function validate(data) {
    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const tempErrors = {};
    for (let key in data) {
      if (typeof data[key] === "string" && !data[key].trim()) {
        tempErrors[key] == `${key} is s required`;
      }
      if (Array.isArray(data[key] && data[key].length === 0)) {
        tempErrors[key] = `this is required`;
      }
      if (!(data[key] instanceof File === false)) {
        tempErrors[key] = `this is required`;
      }
    }

    return tempErrors;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const comingErr = validate(formData);
    console.log(comingErr);
    setError(comingErr);
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
          error={error.userName}
        />
        <TextInput
          type="email"
          name="email"
          label="Email "
          value={formData.email}
          placeholder="Enter your email"
          handleChange={handleChange}
          error={error.email}
        />

        <TextInput
          type="password"
          name="pass"
          label="Password "
          value={formData.pass}
          placeholder="********"
          autoComplete="new-password"
          handleChange={handleChange}
          error={error.pass}
        />
        <TextInput
          type="password"
          name="confPass"
          label="Confirm Password "
          value={formData.confPass}
          placeholder="********"
          autoComplete="new-password"
          handleChange={handleChange}
          error={error.confPass}
        />
        <RadioGroup
          value={formData.gender}
          handleChange={handleChange}
          error={error.gender}
        />
        <CheckboxGroup
          checked={formData.skills}
          handleChange={handleChange}
          error={error.skills}
        />
        <SelectInput
          value={formData.country}
          handleChange={handleChange}
          error={error.country}
        />
        <FileInput handleChange={handleChange} error={error.picture} />
        <Button value="Submit" handleSubmit={handleSubmit} />
      </form>
    </div>
  );
};

export default Form;
