import { useRef } from "react";
import { useForm } from "react-hook-form";
import { Form, Link } from "react-router-dom";

import ForwardedInput from "../../shared/components/FormElements/Input";
import Button from "../../shared/components/FormElements/Button";

const Input = ForwardedInput;
const Login: React.FC<{ isLogin: boolean; classes: string }> = ({
  isLogin,
  classes,
}) => {
  const loginRef = useRef<HTMLInputElement | null>();
  const passwordRef = useRef<HTMLInputElement | null>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: unknown) => {
    console.log(data);
  };

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
  });

  return (
    <Form onSubmit={handleSubmit(onSubmit)} className={classes}>
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
      <Button inverse type="submit">
        {isLogin ? "Login" : "Signup"}
      </Button>
      <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
        {isLogin ? "Signup Instead" : "Login Instead"}
      </Link>
    </Form>
  );
};

export default Login;
