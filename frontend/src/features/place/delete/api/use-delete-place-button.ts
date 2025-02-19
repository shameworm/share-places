import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";

async function deletePlace(placeId: string) {
  const response = await apiClient.delete(`/places/${placeId}`);
  return response.data;
}

export const useDeletePlaceButton = () => {
  const queryClient = useQueryClient();
  const { userId } = useParams();

  const { mutateAsync, isPending } = useMutation({
    mutationFn: deletePlace,
    onSuccess: async () => {
      toast.success("Place successfully deleted!");

      await queryClient.invalidateQueries({ queryKey: ["places", userId] });
    },
    onError: (error: AxiosError) => {
      toast.error((error.response?.data as { message: string }).message);
    },
  });

  async function deleteHandler(placeId: string) {
    await mutateAsync(placeId);
  }

  return { deleteHandler, isDeleting: isPending };
};
