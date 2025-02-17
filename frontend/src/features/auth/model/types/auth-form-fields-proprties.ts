import { FieldValues, UseFormReturn } from "react-hook-form";

export type AuthFormFieldProperties<T extends FieldValues> = {
  form: UseFormReturn<T, unknown, undefined>;
};
