import { useForm } from "react-hook-form";
import { useAuthStore, signupSchema, SignupFormValues } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useSignup() {
  const { isLoggedIn, login } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
      email: "",
      name: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = () => {
    login();
    console.log(isLoggedIn);
    form.reset();
    navigate("/auth");
  };

  return { form, onSubmit };
}
