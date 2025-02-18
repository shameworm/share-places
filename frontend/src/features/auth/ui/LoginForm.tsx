import { useLogin } from "../api";

import { EmailLoginField, PasswordLoginField } from "./AuthFields";

import { Form } from "~/shared/ui/form";
import { Button } from "~/shared/ui/button";
import { Link } from "react-router-dom";

export function LoginForm() {
  const { form, onSubmit } = useLogin();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-lg bg-primary-foreground p-6 rounded-lg shadow-lg flex flex-col gap-6"
      >
        <h2 className="text-2xl font-semibold text-primary text-center">
          Login
        </h2>

        <div className="flex flex-col gap-4">
          <EmailLoginField form={form} />
          <PasswordLoginField form={form} />
        </div>

        <div className="text-center">
          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-1/2 mt-4 font-semibold"
            disabled={form.formState.isSubmitting}
          >
            Login
          </Button>
        </div>

        <div className="mt-4 text-center flex flex-col">
          <span>Don't have an account? </span>
          <Link to="/auth?mode=signup">
            <Button variant="link" size="lg">
              Signup here
            </Button>
          </Link>
        </div>
      </form>
    </Form>
  );
}
