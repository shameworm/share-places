import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";

import { updatePlaceFormValues, updatePlaceSchema } from "../model";

async function updatePlace(data: updatePlaceFormValues, placeId: string) {
  const response = await apiClient.patch(`/places/${placeId}`, data);
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
  };
}) => {
  const form = useForm<updatePlaceFormValues>({
    resolver: zodResolver(updatePlaceSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      address: initialData?.address || "",
    },
  });

  const { mutateAsync } = useMutation({
    mutationFn: (data: updatePlaceFormValues) =>
      updatePlace(data, initialData.id!),
    onSuccess: () => {
      toast.success("Place successfully updated!");
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function onSubmit(mutationData: updatePlaceFormValues) {
    const dataWithCreator = { ...mutationData, placeId: initialData.id };
    await mutateAsync(dataWithCreator);
  }

  return { form, onSubmit };
};
