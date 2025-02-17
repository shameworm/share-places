import { FieldValues, UseFormReturn } from "react-hook-form";

export type CreateFormFieldProperties<T extends FieldValues> = {
  form: UseFormReturn<T, unknown, undefined>;
};
