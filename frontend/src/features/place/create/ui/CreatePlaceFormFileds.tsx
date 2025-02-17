import { BaseField } from "~/shared/ui/form";
import { CreateFormFieldProperties } from "../model/types";
import { CreatePlaceFormValues } from "../model";

export function TitleField({
  form,
}: CreateFormFieldProperties<CreatePlaceFormValues>) {
  return (
    <BaseField
      form={form}
      name="title"
      label="Title"
      placeholder="Enter place title"
    />
  );
}

export function DescriptionField({
  form,
}: CreateFormFieldProperties<CreatePlaceFormValues>) {
  return (
    <BaseField
      form={form}
      name="description"
      label="Description"
      placeholder="Enter place description"
      inputType="textarea"
    />
  );
}

export function AddressField({
  form,
}: CreateFormFieldProperties<CreatePlaceFormValues>) {
  return (
    <BaseField
      form={form}
      name="address"
      label="Address"
      placeholder="Enter place address"
    />
  );
}
