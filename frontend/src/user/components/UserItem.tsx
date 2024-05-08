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
          className="flex items-center w-full h-full p-4 text-[#EEEEEE] bg-[#222831] hover:text-[#222831] hover:bg-[#EEEEEE] active:bg-[#31363F] duration-500"
        >
          <div className="w-16 h-16 mr-6">
            <Avatar image={image} alt={name} />
          </div>
          <div>
            <h2 className="mb-2  font-normal text-2xl">{name}</h2>
            <h3 className="m-0 ">
              Shared: {places} {places === 1 ? "place" : "places"}.
            </h3>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default UserItem;
