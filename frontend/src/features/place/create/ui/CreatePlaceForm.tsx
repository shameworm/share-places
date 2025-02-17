import { useCreatePlace } from "../lib";

import {
  TitleField,
  DescriptionField,
  AddressField,
} from "./CreatePlaceFormFileds";

import { Form } from "~/shared/ui/form";
import { Button } from "~/shared/ui/button";

export function CreatePlaceForm() {
  const { form, onSubmit } = useCreatePlace();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-primary-foreground p-6 rounded-lg shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold text-primary text-center">
          Create a Place
        </h2>

        <div className="flex flex-col gap-4">
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
          Create
        </Button>
      </form>
    </Form>
  );
}
