import React from "react";
import { Controller, useForm } from "react-hook-form";
import TextInput from "./TextInput";
import CheckboxGroup from "./CheckboxGroup";
import DatePicker from "./DatePicker";
const Form = () => {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      name: "",
      email: "",
      skills: [],
      date: null,
    },
  });
  console.log("form render");
  function onSubmit(data) {
    console.log("Form Data : ", data);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Controller
          name="name"
          control={control}
          rules={{ required: "Name is required" }}
          render={({ field, fieldState }) => (
            <div>
              <TextInput
                label="name"
                value={field.value}
                onChange={field.onChange}
                placeholder={"enter your name"}
                type="text"
              />
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          )}
        />
        <Controller
          name="email"
          control={control}
          rules={{ required: "Email is required" }}
          render={({ field, fieldState }) => (
            <div>
              <TextInput
                label="email"
                value={field.value}
                onChange={field.onChange}
                placeholder={"enter your email"}
                type="email"
              />
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          )}
        />
        <Controller
          name="skills"
          control={control}
          rules={{ required: "at least one skill is required " }}
          render={({ field, fieldState }) => (
            <div>
              <CheckboxGroup value={field.value} onChange={field.onChange} />
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          )}
        />
        <Controller
          name="date"
          control={control}
          rules={{ required: "date is required " }}
          render={({ field, fieldState }) => (
            <div>
              <DatePicker value={field.value} onChange={field.onChange} />
              {fieldState.error && <p>{fieldState.error.message}</p>}
            </div>
          )}
        />

        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
