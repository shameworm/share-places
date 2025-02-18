import { useQuery } from "@tanstack/react-query";
import { apiClient } from "~/shared/api/client";

const fetchUsers = async () => {
  const response = await apiClient.get(`/users`);
  return response.data.users;
};

export function useAllUsersPage() {
  return useQuery({
    queryKey: ["users"],
    queryFn: fetchUsers,
  });
}
