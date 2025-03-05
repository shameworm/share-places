import { useQuery } from "@tanstack/react-query";
import { apiClient } from "~/shared/api/client";

const fetchPlace = async (placeId: string) => {
  const response = await apiClient.get(`/places/${placeId}`);
  return response.data.place;
};

export function useUpdatePlacePage(placeId: string) {
  return useQuery({
    queryKey: ["places", placeId],
    queryFn: () => fetchPlace(placeId),
  });
}
