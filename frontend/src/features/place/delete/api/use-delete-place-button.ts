import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { toast } from "sonner";

import { apiClient } from "~/shared/api";
import { useAuthStore } from "~/features/auth";

async function deletePlace({
  placeId,
  token,
}: {
  placeId: string;
  token: string;
}) {
  const response = await apiClient.delete(`/places/${placeId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
}

export const useDeletePlaceButton = () => {
  const queryClient = useQueryClient();
  const { userId, token } = useAuthStore();

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
    await mutateAsync({ placeId, token: token! });
  }

  return { deleteHandler, isDeleting: isPending };
};
