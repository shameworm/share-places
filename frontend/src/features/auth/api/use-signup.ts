import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

import { signupSchema, SignupFormValues } from "../model";

import { apiClient } from "~/shared/api";

async function signupUser(data: SignupFormValues) {
  const response = await apiClient.post("/users/signup", data);
  return response.data;
}

export function useSignup() {
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
      toast.success("Signup successfully!");
      form.reset();
      navigate("/auth");
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function onSubmit(mutationData: SignupFormValues) {
    await mutateAsync({ ...mutationData });
  }

  return { form, onSubmit };
}
