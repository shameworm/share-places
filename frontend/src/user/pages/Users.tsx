import { User } from "../../models/User";
import UsersList from "../components/UsersList";

const Users: React.FC = () => {
  const USERS: User[] = [
    {
      id: "uid1",
      name: "John Doe",
      image:
        "https://th.bing.com/th/id/OIG3.WcfdleQNi.gbWoFtCU56?w=1024&h=1024&rs=1&pid=ImgDetMain",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
