import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { AxiosError } from "axios";

import { signupSchema, SignupFormValues } from "../model";

import { apiClient } from "~/shared/api";
import { useState } from "react";

async function signupUser(data: SignupFormValues & { image?: File }) {
  const formData = new FormData();
  formData.append("email", data.email);
  formData.append("name", data.name);
  formData.append("password", data.password);
  formData.append("confirmPassword", data.confirmPassword);
  if (data.image) {
    formData.append("image", data.image);
  }
  console.log(formData);
  const response = await apiClient.post("/users/signup", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
}

export function useSignup() {
  const navigate = useNavigate();
  const [avatarImage, setAvatarImage] = useState<File | undefined>();

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
    await mutateAsync({ ...mutationData, image: avatarImage });
    setAvatarImage(undefined);
  }

  return { form, onSubmit, setAvatarImage };
}
