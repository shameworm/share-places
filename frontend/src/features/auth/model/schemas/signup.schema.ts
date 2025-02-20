import { z } from "zod";

export const signupSchema = z
  .object({
    image: z.instanceof(File).optional().nullable(),
    email: z.string().email("Invalid email format"),
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .regex(
        /^[A-Z][a-z]+\s[A-Z][a-z]+$/,
        "Name must be in 'First Last' format",
      ),
    password: z
      .string()
      .min(6, "Password must be at least 6 characters")
      .max(50, "Password is too long"),

    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters")
      .max(50, "Confirm password is too long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords  don't match",
    path: ["confirmPassword"],
  });

export type SignupFormValues = z.infer<typeof signupSchema>;
