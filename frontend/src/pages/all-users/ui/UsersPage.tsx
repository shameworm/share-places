import { useGetUsers } from "~/features/user/get";
import { UserList } from "./UsersList";
import { Skeleton } from "~/shared/ui/skeleton";

export function UsersPage() {
  const { data: users, isLoading } = useGetUsers();

  if (isLoading) return <Skeleton type="page" />;

  return <UserList users={users} />;
}
