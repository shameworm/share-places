/* eslint-disable @typescript-eslint/no-unused-vars */
import { useRef, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

import { Link, redirect } from "react-router-dom";

import axios, { AxiosError } from "axios";
import Button from "../../shared/components/FormElements/Button";
import ForwardedInput from "../../shared/components/FormElements/Input";

const Input = ForwardedInput;
const Signup: React.FC<{ classes: string }> = ({ classes }) => {
  const emailRef = useRef<HTMLInputElement | null>();
  const loginRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();
  const confirmPasswordRef = useRef<HTMLInputElement | null>();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    try {
      setIsLoading(true);
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/signup`,
        {
          name: data.login,
          email: data.email,
          password: data.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const responseData = response.data;
      console.log(responseData);
      setIsLoading(false);
      return redirect("/auth?mode=login");
    } catch (error) {
      const axiosError = error as AxiosError<{ message: string }>;
      setError(axiosError?.response?.data?.message || "An error occurred");
      setIsLoading(false);
    }
  };

  const { ref: refEmail, ...restEmailProps } = register("email", {
    required: {
      value: true,
      message: "This field is required!",
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "invalid email address",
    },
  });

  const { ref: refLogin, ...restLoginProps } = register("login", {
    required: {
      value: true,
      message: "This field is required!",
    },
  });

  const { ref: refPassword, ...restPasswordProps } = register("password", {
    required: {
      value: true,
      message: "This field is required!",
    },
    minLength: {
      value: 5,
      message: "Password is to short. (5 characters minimum)",
    },
  });

  const { ref: refConfirmPassword, ...restConfirmPasswordProps } = register(
    "confirmPassword",
    {
      required: {
        value: true,
        message: "This field is required!",
      },
      validate: (val: string) => {
        if (watch("password") != val) {
          return "Your passwords do no match";
        }
      },
    },
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={classes}>
      <Input
        label="E-mail"
        type="email"
        error={errors.email}
        ref={(e) => {
          refEmail(e);
          emailRef.current = e as HTMLInputElement;
        }}
        {...restEmailProps}
      ></Input>
      <Input
        label="Login"
        type="text"
        error={errors.login}
        ref={(e) => {
          refLogin(e);
          loginRef.current = e as HTMLInputElement;
        }}
        {...restLoginProps}
      ></Input>
      <Input
        label="Password"
        type="password"
        error={errors.password}
        ref={(e) => {
          refPassword(e);
          passwordRef.current = e as HTMLInputElement;
        }}
        {...restPasswordProps}
      ></Input>
      <Input
        label="Confirm Password"
        type="password"
        error={errors.confirmPassword}
        ref={(e) => {
          refConfirmPassword(e);
          confirmPasswordRef.current = e as HTMLInputElement;
        }}
        {...restConfirmPasswordProps}
      ></Input>

      <Button inverse type="submit">
        Signup
      </Button>
      <Link to="?mode=login">Login Instead</Link>
    </form>
  );
};

export default Signup;
