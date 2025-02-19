import { BaseField } from "~/shared/ui/form";
import { UpdateFormFieldProperties } from "../model/types";
import { updatePlaceFormValues } from "../model";

export function TitleField({
  form,
}: UpdateFormFieldProperties<updatePlaceFormValues>) {
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
}: UpdateFormFieldProperties<updatePlaceFormValues>) {
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
}: UpdateFormFieldProperties<updatePlaceFormValues>) {
  return (
    <BaseField
      form={form}
      name="address"
      label="Address"
      placeholder="Enter place address"
    />
  );
}
