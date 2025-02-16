import { z } from "zod";

export const createPlaceSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .max(500, "Description is too long.")
    .min(3, "Description must be at least 3 characters"),
  location: z.string().min(5, "Loaction must be at least 5 characters"),
});

export type CreatePlaceFormValues = z.infer<typeof createPlaceSchema>;
