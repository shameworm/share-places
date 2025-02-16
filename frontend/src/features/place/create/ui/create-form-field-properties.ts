import { UseFormReturn } from "react-hook-form";
import { CreatePlaceFormValues } from "../model";

export type CreateFormFieldProperties = {
  form: UseFormReturn<CreatePlaceFormValues, unknown, undefined> | null;
};
