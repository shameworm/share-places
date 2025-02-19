import { FieldValues, UseFormReturn } from "react-hook-form";

export type UpdateFormFieldProperties<T extends FieldValues> = {
  form: UseFormReturn<T, unknown, undefined>;
};
