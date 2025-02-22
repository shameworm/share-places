import { z } from "zod";

export const updatePlaceSchema = z.object({
  images: z
    .instanceof(FileList)
    .refine((files) => files.length >= 1 && files.length <= 5, {
      message: "Please provide between one and five images.",
    })
    .optional()
    .nullable(),
  title: z.string().min(3, "Title must be at least 3 characters"),
  description: z
    .string()
    .max(500, "Description is too long.")
    .min(5, "Description must be at least 5 characters"),
  address: z.string().min(5, "Address must be at least 5 characters"),
});

export type updatePlaceFormValues = z.infer<typeof updatePlaceSchema>;
