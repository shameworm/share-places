import { useAllUsersPage } from "../api";

import { UserList } from "./UsersList";

import { Skeleton } from "~/shared/ui/skeleton";

export function UsersPage() {
  const { data: users, isLoading } = useAllUsersPage();

  if (isLoading) return <Skeleton type="page" />;

  return <UserList users={users} />;
}
