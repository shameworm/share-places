import { UserProperties } from "~/entities/user/ui/user-properties";
import { UserCard } from "~/entities/user";
import { Card } from "~/shared/ui/card";

export function UserList({ users }: { users: UserProperties[] }) {
  if (users.length <= 0) {
    return (
      <div>
        <Card>No users found.</Card>
      </div>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-0 mx-auto list-none">
      {users.map((user: UserProperties) => (
        <UserCard
          id={user.id}
          image={user.image}
          name={user.name}
          places={user.places}
        />
      ))}
    </ul>
  );
}
