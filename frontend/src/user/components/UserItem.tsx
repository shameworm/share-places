import { Link } from "react-router-dom";

import { User } from "../../models/User";
import Card from "../../shared/components/UIElements/Card";
import Avatar from "../../shared/components/UIElements/Avatar";

const UserItem: React.FC<User> = ({ id, image, name, places }) => {
  return (
    <li className="m-4 w-[calc(45% - 2rem)] min-w-[17.5rem]">
      <Card>
        <Link
          to={`${id}/places`}
          className="flex items-center w-full h-full p-4 text-white bg-[#292929] hover:bg-[#ffd900] active:bg-[#ffd900] hover:text-[#292929] active:text-[#292929]"
        >
          <div className="w-16 h-16 mr-6">
            <Avatar image={image} alt={name} />
          </div>
          <div>
            <h2 className="mb-2  font-normal text-2xl">{name}</h2>
            <h3 className="m-0 ">
              User Shared: {places} {places === 1 ? "place" : "places"}.
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
