import { DUMMY_USERS } from "../lib";
import { UserList } from "./UsersList";

export function UsersPage() {
  return <UserList users={DUMMY_USERS} />;
}
