import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { CreateFormFieldProperties } from "./create-form-field-properties";
import { Textarea } from "~/shared/ui/textarea";

export function DescritionField({ form }: CreateFormFieldProperties) {
  if (!form) return null;

  return (
    <FormField
      control={form.control}
      name="description"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Description</FormLabel>
          <FormControl>
            <Textarea {...field} placeholder="Enter place description" />
          </FormControl>
          {form.formState.errors.description && (
            <FormMessage>
              {form.formState.errors.description.message}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
