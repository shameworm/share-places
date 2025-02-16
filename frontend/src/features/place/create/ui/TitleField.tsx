import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { CreateFormFieldProperties } from "./create-form-field-properties";
import { Input } from "~/shared/ui/input";

export function TitleField({ form }: CreateFormFieldProperties) {
  if (!form) return null;

  return (
    <FormField
      control={form.control}
      name="title"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Title</FormLabel>
          <FormControl>
            <Input {...field} placeholder="Enter place title" />
          </FormControl>
          {form.formState.errors.title && (
            <FormMessage>{form.formState.errors.title.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
