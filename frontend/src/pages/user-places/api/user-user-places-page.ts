import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useParams } from "react-router-dom";
import { apiClient } from "~/shared/api/client";

const fetchPlacesByUserId = async (userId: string) => {
  const response = await apiClient.get(`/places/user/${userId}`);
  return response.data.places;
};

export function useUserPlacesPage() {
  const { userId } = useParams();
  return useQuery({
    queryKey: ["places", userId],
    queryFn: async () => {
      try {
        return await fetchPlacesByUserId(userId!);
      } catch (error) {
        if ((error as AxiosError).response?.status === 404) {
          return [];
        }
        throw error;
      }
    },
  });
}
