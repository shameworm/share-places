import { UserCard } from "~/entities/user";

import { UserProperties } from "./user-properties";
import { useGridCols } from "../lib";

import { Card } from "~/shared/ui/card";

export function UserList({ users }: { users: UserProperties[] }) {
  const gridCols = useGridCols(users.length);

  if (!users || users.length <= 0) {
    return (
      <Card className="mx-auto text-center text-3xl bg-transparent">
        No users found.
      </Card>
    );
  }

  return (
    <ul className={`grid ${gridCols} gap-4 p-0`}>
      {users.map((user: UserProperties) => (
        <UserCard
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          places={Array.isArray(user.places) ? user.places.length : 0}
        />
      ))}
    </ul>
  );
}
