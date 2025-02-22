import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";

async function loginUser(data: LoginFormValues) {
  const response = await apiClient.post("/users/login", data);
  return response.data;
}

import { useAuthStore, LoginFormValues, loginSchema } from "../model";

export function useLogin() {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const { userId, name, token } = data;
      toast.success(`Welcome ${name}!`);
      login(userId, token);
      form.reset();
      navigate("/");
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function onSubmit(mutationData: LoginFormValues) {
    await mutateAsync({ ...mutationData });
  }

  return { form, onSubmit };
}
