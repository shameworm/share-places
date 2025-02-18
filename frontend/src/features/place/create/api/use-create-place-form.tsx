// import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";
import { CreatePlaceFormValues, createPlaceSchema } from "../model";
import { useAuthStore } from "~/features/auth";
import { useNavigate } from "react-router-dom";

async function createPlace(data: CreatePlaceFormValues) {
  const response = await apiClient.post("/places", data);
  return response.data;
}

export const useCreatePlace = () => {
  const navigate = useNavigate();
  const { userId } = useAuthStore();
  const form = useForm<CreatePlaceFormValues>({
    resolver: zodResolver(createPlaceSchema),
    defaultValues: {
      title: "",
      description: "",
      address: "",
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
    const dataWithCreator = { ...mutationData, creator: userId };
    await mutateAsync(dataWithCreator);
  }

  return { form, onSubmit };
};
