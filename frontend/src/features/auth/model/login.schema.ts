import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 8 characters long"),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
