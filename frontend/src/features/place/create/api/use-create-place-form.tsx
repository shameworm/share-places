import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";
import { CreatePlaceFormValues, createPlaceSchema } from "../model";
import { useAuthStore } from "~/features/auth";

async function createPlace(
  data: CreatePlaceFormValues & { creator: string; token: string },
) {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("address", data.address);
  formData.append("creator", data.creator!);
  if (data.images) {
    Array.from(data.images).forEach((file) => {
      formData.append("images[]", file);
    });
  }

  const response = await apiClient.post("/places", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${data.token}`,
    },
  });

  return response.data;
}

export const useCreatePlace = () => {
  const navigate = useNavigate();
  const { userId, token } = useAuthStore();
  const form = useForm<CreatePlaceFormValues>({
    resolver: zodResolver(createPlaceSchema),
    defaultValues: {
      title: "",
      description: "",
      address: "",
      images: undefined,
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: createPlace,
    onSuccess: () => {
      form.reset();
      toast.success("Place successfully created!");
      navigate(`/${userId}/places`);
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function onSubmit(mutationData: CreatePlaceFormValues) {
    const dataWithCreator = {
      ...mutationData,
      creator: userId!,
      token: token!,
    };
    await mutateAsync(dataWithCreator);
  }

  return { form, onSubmit };
};
