import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";

async function signupUser(data: SignupFormValues) {
  const response = await apiClient.post("/users/signup", data);
  return response.data;
}

import { useAuthStore, signupSchema, SignupFormValues } from "../model";

export function useSignup() {
  const { login } = useAuthStore();
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

  const { mutateAsync } = useMutation({
    mutationFn: signupUser,
    onSuccess: () => {
      toast.success("Signup successful!");
      login();
      form.reset();
      navigate("/auth");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  async function onSubmit(mutationData: SignupFormValues) {
    await mutateAsync({ ...mutationData });
  }

  return { form, onSubmit };
}
