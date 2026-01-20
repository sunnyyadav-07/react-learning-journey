import { z } from "zod";

export const validation = z
  .object({
    name: z
      .string()
      .min(1, "Name is required")
      .min(3, "Name must be at least 3 characters"),
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(1, "Password is required")
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "Must contain one uppercase letter")
      .regex(/[0-9]/, "Must contain one number"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
    picture: z.any().refine((file) => file.length === 1, "Picture is required"),
    skills: z.array(z.string).min(1, "Select at least 1 skill"),
    country: z.string().min(1, "Country is required"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password do not match",
    path: ["confirmPassword"],
  });
