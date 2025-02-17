import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";

import { Button } from "../button";
import { Input } from "../input";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./Form";

const meta = {
  title: "shared/Form",
  component: Form,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof Form>;

type FormValues = {
  formField: string;
};

export const Basic: Story = {
  render: () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<FormValues>({
      defaultValues: {
        formField: "",
      },
    });

    function onSubmit(values: FormValues) {
      console.log(values);
    }

    return (
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="formField"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Form label</FormLabel>
                <FormControl>
                  <Input
                    placeholder="placeholder"
                    {...field}
                    {...form.register("formField", {
                      required: "This field is required",
                      minLength: { value: 2, message: "Minimum 2 characters" },
                      maxLength: {
                        value: 50,
                        message: "Maximum 50 characters",
                      },
                    })}
                  />
                </FormControl>
                <FormDescription>This is form description</FormDescription>
                <FormMessage>
                  {form.formState.errors.formField?.message}
                </FormMessage>
              </FormItem>
            )}
          />
          <Button type="submit">Button</Button>
        </form>
      </Form>
    );
  },
};
