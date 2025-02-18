import { useQuery } from "@tanstack/react-query";
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
    queryFn: () => fetchPlacesByUserId(userId!),
  });
}
