import { useForm } from "react-hook-form";
import { useAuthStore, loginSchema, LoginFormValues } from "../model";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const { isLoggedIn, login } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    login();
    console.log(isLoggedIn);
    form.reset();
    navigate("/");
  };

  return { form, onSubmit };
}
