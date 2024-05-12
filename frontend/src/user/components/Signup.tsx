import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

import ForwardedInput from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const Input = ForwardedInput;
const Signup: React.FC<{ isLogin: boolean; classes: string }> = ({
  isLogin,
  classes,
}) => {
  const emailRef = useRef<HTMLInputElement | null>();
  const loginRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();
  const confirmPasswordRef = useRef<HTMLInputElement | null>();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
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
    }
  );

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes}>
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
        {isLogin ? "Login" : "Signup"}
      </Button>
      <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
        {isLogin ? "Signup Instead" : "Login Instead"}
      </Link>
    </Form>
  );
};

export default Signup;
