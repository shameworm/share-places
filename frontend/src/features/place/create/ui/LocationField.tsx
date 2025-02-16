import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { CreateFormFieldProperties } from "./create-form-field-properties";
import { Input } from "~/shared/ui/input";

export function LocationField({ form }: CreateFormFieldProperties) {
  if (!form) return null;

  return (
    <FormField
      control={form.control}
      name="location"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Location</FormLabel>
          <FormControl>
            <Input {...field} placeholder="Enter place location" />
          </FormControl>
          {form.formState.errors.location && (
            <FormMessage>{form.formState.errors.location.message}</FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
