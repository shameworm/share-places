import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";

import { updatePlaceFormValues, updatePlaceSchema } from "../model";
import { useAuthStore } from "~/features/auth";

async function updatePlace(
  data: updatePlaceFormValues,
  placeId: string,
  token: string,
) {
  const formData = new FormData();
  formData.append("title", data.title);
  formData.append("description", data.description);
  formData.append("address", data.address);

  if (data.images && data.images !== null) {
    Array.from(data.images).forEach((file) => {
      formData.append("images[]", file);
    });
  }

  const response = await apiClient.patch(`/places/${placeId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export const useUpdatePlace = ({
  initialData,
}: {
  initialData: {
    title: string;
    description: string;
    address: string;
    id: string;
    images: FileList | null;
  };
}) => {
  const { token } = useAuthStore();
  const form = useForm<updatePlaceFormValues>({
    resolver: zodResolver(updatePlaceSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      address: initialData?.address || "",
      images: null,
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data: updatePlaceFormValues) =>
      updatePlace(data, initialData.id!, token!),
    onSuccess: () => {
      toast.success("Place successfully updated!");
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function onSubmit(mutationData: updatePlaceFormValues) {
    const dataWithCreator = {
      ...mutationData,
      placeId: initialData.id,
      token: token!,
    };
    await mutateAsync(dataWithCreator);
  }

  return { form, onSubmit };
};
