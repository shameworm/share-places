import { UserProperties } from "~/entities/user/ui/user-properties";
import { UserCard } from "~/entities/user";
import { Card } from "~/shared/ui/card";
import { Link } from "react-router-dom";

export function UserList({ users }: { users: UserProperties[] }) {
  if (!users || users.length <= 0) {
    return (
      <Card className="mx-auto text-center text-3xl bg-transparent">
        No users found.
      </Card>
    );
  }
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-0 mx-auto list-none">
      {users.map((user: UserProperties) => (
        <li>
          <Link to={`${user.id}/places`}>
            <UserCard
              id={user.id}
              image={user.image}
              name={user.name}
              places={Array.isArray(user.places) ? user.places.length : 0}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
