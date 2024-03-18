import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email("Invalid email address"),
    name: z.string(),
    tc: z.boolean(),
    password: z.string().min(6, "Password must be 6 characters long"),
    password2: z.string(),
  })
  .refine((data) => data.password === data.password2, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
