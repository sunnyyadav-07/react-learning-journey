import React, { useEffect, useState } from "react";
import TextInput from "./TextInput";
import RadioGroup from "./RadioGroup";
import CheckboxGroup from "./CheckboxGroup";
import SelectInput from "./SelectInput";
import FileInput from "./FileInput";
import Button from "./Button";

const Form = () => {
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);
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
  useEffect(() => {
    if (submitted) {
      alert("Form submitted successfully!");
      setSubmitted(false);
    }
  }, [submitted]);
  console.log(formData.picture);
  function handleChange(e) {
    const { name, value, type, files } = e.target;

    setFormData((prev) => {
      if (type === "checkbox") {
        const data = prev.skills;
        const selectedSkill = data.includes(name)
          ? data.filter((item) => item !== name)
          : [...data, name];
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

  function validate(data) {
    const nameRegex = /^[a-zA-Z\s.'-]+$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validator = {
      userName: (v) => {
        if (!v.trim()) return "Name is required";
        if (!nameRegex.test(v)) return "Invalid characters";
      },
      email: (v) => {
        if (!v.trim()) return "Email is required";
        if (!emailRegex.test(v)) return "Invalid email format";
      },
      pass: (v) => {
        if (!v.trim()) return "Password is required";
        if (!passwordRegex.test(v)) return "Weak password";
      },
      confPass: (v) => {
        if (!v.trim()) return "Confirm password is required";
      },
      gender: (v) => {
        if (!v) return "Gender is required";
      },
      country: (v) => !v && "Country is required",
      skills: (v) => !v.length && "Select at least one skill",
      picture: (v) => !v && "Picture is required",
    };
    const tempErrors = {};

    for (let key in data) {
      if (validator[key]) {
        const errorMsg = validator[key](data[key]);
        if (errorMsg) {
          tempErrors[key] = errorMsg;
        }
      }
      console.log(tempErrors)
      //   if (typeof data[key] === "string" && !data[key].trim()) {
      //     tempErrors[key] = `${key} is required`;
      //   } else if (key === "userName") {
      //     if (!nameRegex.test(data[key])) {
      //       tempErrors[key] = "Name contains invalid characters";
      //     }
      //   } else if (key === "email") {
      //     if (!emailRegex.test(data[key])) {
      //       tempErrors[key] = "Invalid email format";
      //     }
      //   } else if (key === "pass") {
      //     if (!passwordRegex.test(data[key])) {
      //       tempErrors[key] = "Password must be strong";
      //     }
      //   }
      //   if (Array.isArray(data[key]) && data[key].length === 0) {
      //     tempErrors[key] = `${key} is required`;
      //   }
      //   if (key === "picture" && !data.picture) {
      //     tempErrors[key] = `${key} is required`;
      //   }
    }

    if (data.confPass && data.pass !== data.confPass) {
      tempErrors.confPass = "password do not match";
    }
    return tempErrors;
  }
  function handleSubmit(e) {
    e.preventDefault();
    const comingErr = validate(formData);
    console.log(comingErr);
    if (!Object.keys(comingErr).length) {
      setError({});
      setFormData({
        userName: "",
        email: "",
        pass: "",
        confPass: "",
        gender: "",
        skills: [],
        country: "",
        picture: null,
      });
      setSubmitted(true);
    } else {
      setError(comingErr);
    }
  }
  return (
    <div className="bg-white w-full max-w-2xl rounded-xl shadow-lg p-8">
      <h1 className="text-3xl font-bold text-center text-blue-700 mb-4">
        Registration Form
      </h1>
      <form className="space-y-3" onSubmit={handleSubmit} noValidate>
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
          autoComplete="email"
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
        <Button value="Submit" />
      </form>
    </div>
  );
};

export default Form;
