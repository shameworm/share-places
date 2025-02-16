import { useCreatePlace } from "../lib";

import { TitleField } from "./TitleField";
import { LocationField } from "./LocationField";
import { DescritionField } from "./DescriptionField";

import { Form } from "~/shared/ui/form";
import { Button } from "~/shared/ui/button";

export function CreatePlaceForm() {
  const { form, onSubmit } = useCreatePlace();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-2 items-center">
          <TitleField form={form} />
          <DescritionField form={form} />
          <LocationField form={form} />
        </div>

        <Button
          type="submit"
          variant={"primary"}
          size={"lg"}
          disabled={form.formState.isSubmitting}
        >
          Create
        </Button>
      </form>
    </Form>
  );
}
