import { z } from "zod";

const FormSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(5, "Name length should not be less than 5")
    .max(20, "Name length should not surpass 20"),
  email: z.string().min(1, "Email is required").email(),
  skills: z.array(z.string()).min(1, "Select at least one skil"),
  date: z.string().min(1, "Date is required"),
});

export default FormSchema;
