import { User } from "../../models/User";
import UsersList from "../components/UsersList";
import UserImg from "../../assets/user.svg";

const Users: React.FC = () => {
  const USERS: User[] = [
    {
      id: "uid1",
      name: "John Doe",
      image:
        "https://th.bing.com/th/id/OIG3.WcfdleQNi.gbWoFtCU56?w=1024&h=1024&rs=1&pid=ImgDetMain",
      places: 2,
    },
    {
      id: "uid2",
      name: "Jane Smith",
      image: UserImg,
      places: 3,
    },
    {
      id: "uid3",
      name: "Michael Doe",
      image: UserImg,
      places: 1,
    },
    {
      id: "uid4",
      name: "Emily Brown",
      image: UserImg,
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
