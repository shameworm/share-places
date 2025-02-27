import { useUpdatePlace } from "../api";

import {
  TitleField,
  DescriptionField,
  AddressField,
} from "./UpdatePlaceFormFileds";

import { Form } from "~/shared/ui/form";
import { Button } from "~/shared/ui/button";
import { ImageUploadField } from "~/shared/ui/form/ImageUploadField";

export function UpdatePlaceForm({
  initialData,
}: {
  initialData: {
    title: string;
    description: string;
    address: string;
    id: string;
    images: FileList;
  };
}) {
  const { form, onSubmit } = useUpdatePlace({ initialData });
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-card p-6 rounded-lg shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold text-primary text-center">
          Update Place
        </h2>

        <div className="flex flex-col gap-4">
          <ImageUploadField form={form} name="images" label="Upload images" />
          <TitleField form={form} />
          <DescriptionField form={form} />
          <AddressField form={form} />
        </div>

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full mt-4"
          disabled={form.formState.isSubmitting}
        >
          Update
        </Button>
      </form>
    </Form>
  );
}
