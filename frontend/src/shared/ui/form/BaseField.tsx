import {
  Control,
  FieldValues,
  FormState,
  ControllerRenderProps,
  Path,
} from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/ui/form";
import { Textarea } from "~/shared/ui/textarea";
import { Input } from "~/shared/ui/input";

type FormType<T extends FieldValues> = {
  control: Control<T> | undefined;
  formState: FormState<T> | undefined;
};

type BaseFieldProps<T extends FieldValues> = {
  form: FormType<T>;
  name: Path<T>;
  label: string;
  placeholder: string;
  inputType?: "textarea" | "input" | "password";
};

export function BaseField<T extends FieldValues>({
  form,
  name,
  label,
  placeholder,
  inputType = "input",
}: BaseFieldProps<T>) {
  if (!form) return null;

  const renderInputComponent = (field: ControllerRenderProps<T, Path<T>>) => {
    switch (inputType) {
      case "textarea":
        return <Textarea {...field} placeholder={placeholder} />;
      case "password":
        return <Input {...field} placeholder={placeholder} type="password" />;
      default:
        return <Input {...field} placeholder={placeholder} />;
    }
  };

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>{renderInputComponent(field)}</FormControl>
          {form?.formState?.errors[name] && (
            <FormMessage>
              {form.formState.errors[name]?.message?.toString()}
            </FormMessage>
          )}
        </FormItem>
      )}
    />
  );
}
