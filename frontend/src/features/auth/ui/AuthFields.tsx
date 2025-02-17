import { BaseField } from "~/shared/ui/form";
import {
  LoginFormValues,
  SignupFormValues,
  AuthFormFieldProperties,
} from "../model";

export function EmailLoginField({
  form,
}: AuthFormFieldProperties<LoginFormValues>) {
  return (
    <BaseField
      form={form}
      name="email"
      label="Email"
      placeholder="Enter email address"
    />
  );
}

export function EmailSignupField({
  form,
}: AuthFormFieldProperties<SignupFormValues>) {
  return (
    <BaseField
      form={form}
      name="email"
      label="Email"
      placeholder="Enter email address"
    />
  );
}

export function PasswordLoginField({
  form,
}: AuthFormFieldProperties<LoginFormValues>) {
  return (
    <BaseField
      form={form}
      name="password"
      label="Password"
      placeholder="Enter password"
      inputType="password"
    />
  );
}

export function PasswordSignupField({
  form,
}: AuthFormFieldProperties<SignupFormValues>) {
  return (
    <BaseField
      form={form}
      name="password"
      label="Password"
      placeholder="Enter password"
      inputType="password"
    />
  );
}

export function ConfirmPasswordSignupField({
  form,
}: AuthFormFieldProperties<SignupFormValues>) {
  return (
    <BaseField
      form={form}
      name="confirmPassword"
      label="Confirm password"
      placeholder="Enter confirm password"
      inputType="password"
    />
  );
}

export function NameSignupField({
  form,
}: AuthFormFieldProperties<SignupFormValues>) {
  return (
    <BaseField
      form={form}
      name="name"
      label="Name"
      placeholder="Enter your name"
    />
  );
}
