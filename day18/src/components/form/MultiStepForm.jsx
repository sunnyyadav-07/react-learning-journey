import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { useForm } from "react-hook-form";
import FormSchema from "../../validation/FormSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const { handleSubmit,reset, control, getValues, trigger } = useForm({
    resolver: zodResolver(FormSchema),
    shouldUnregister: false,
    defaultValues: {
      name: "",
      email: "",
      skills: [],
      date: "",
    },
  });
  async function nextStep() {
    let fields = [];
    if (step === 1) fields = ["name", "email"];
    if (step === 2) fields = ["skills", "date"];
    const isValid = await trigger(fields);
    if (isValid) {
      setStep((prev) => prev + 1);
    }
  }
  function prevStep() {
    setStep((prev) => prev - 1);
  }

  function onSubmit(data) {
    let loadingToast=toast.loading("Submitting...");
    let timeOut = setTimeout(() => {
       toast.dismiss(loadingToast);
      toast.success("Your data added to database successfully!");
      reset()
      setStep(1)
      clearTimeout(timeOut);
    }, 1500);
  }
  return (
    <div className="bg-blue-300 w-[40%] pt-4 rounded-lg">
      <h1 className="text-center text-3xl font-bold border-b-2">
        Multi step form
      </h1>
      <form className=" p-10 space-y-8" onSubmit={handleSubmit(onSubmit)}>
        {step === 1 && <Step1 control={control} />}
        {step === 2 && <Step2 control={control} />}
        {step === 3 && <Step3 data={getValues()} />}
        <div className="flex justify-center gap-3">
          {step > 1 && (
            <button
              type="button"
              onClick={prevStep}
              className="bg-blue-950 text-white px-6 text-2xl py-2 rounded-lg"
            >
              Back
            </button>
          )}
          {step < 3 && (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-950 text-white px-6 text-2xl py-2 rounded-lg 
          "
            >
              Next
            </button>
          )}
          {step === 3 && (
            <button
              type="submit"
              className="bg-blue-700 text-2xl px-4 py-2 rounded-lg text-white"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
