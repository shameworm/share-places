import { Link } from "react-router-dom";

import { useSignup } from "../api";
import {
  EmailSignupField,
  NameSignupField,
  PasswordSignupField,
  ConfirmPasswordSignupField,
} from "./AuthFields";

import { Form } from "~/shared/ui/form";
import { Button } from "~/shared/ui/button";
import { ImageUploadField } from "~/shared/ui/form/ImageUploadField";

export function SignupForm() {
  const { form, onSubmit } = useSignup();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-card p-6 rounded-lg shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold text-primary text-center">
          Signup
        </h2>

        <div className="flex flex-col gap-4">
          <ImageUploadField
            form={form}
            name="image"
            label="Upload avatar"
            isAvatar
          />
          <EmailSignupField form={form} />
          <NameSignupField form={form} />
          <PasswordSignupField form={form} />
          <ConfirmPasswordSignupField form={form} />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-1/2 mt-4 font-semibold"
            disabled={form.formState.isSubmitting}
          >
            Singup
          </Button>
        </div>

        <div className="mt-4 text-center flex flex-col">
          <span>Already have an account? </span>
          <Link to="/auth?mode=login">
            <Button variant="link" size="lg">
              Login instead
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
