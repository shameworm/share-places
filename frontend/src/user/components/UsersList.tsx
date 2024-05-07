import { User } from "../../models/User";
import UserItem from "./UserItem";

type UserListProps = {
  items: User[];
};
const UsersList: React.FC<UserListProps> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="text-center flex justify-center items-center">
        <h2>No users found.</h2>
      </div>
    );
  }

  return (
    <ul className="list-none my-0 mx-auto p-0 w-1/2 max-w-[50rem] flex justify-center flex-wrap">
      {items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          places={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
