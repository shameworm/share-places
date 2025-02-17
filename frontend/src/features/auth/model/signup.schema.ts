import { z } from "zod";

export const signupSchema = z
  .object({
    email: z.string().email("Invalid email format"),
    name: z.string().min(3, "Name must be at least 8 characters"),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(50, "Password is too long"),
    confirmPassword: z
      .string()
      .min(8, "Confirm password must be at least 8 characters")
      .max(50, "Confirm password is too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords  don't match",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
