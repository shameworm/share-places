import Card from "../../shared/components/UIElements/Card";
import PlaceItem from "./PlaceItem";

import { Place } from "../../models/Place";

const PlaceList: React.FC<{ items: Place[] }> = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className="my-4 mx-auto p-0 w-5/6 max-w-[40rem] flex justify-center items-center text-center">
        <Card className="p-5">
          <h2>No places found.</h2>
          <button>Share Place</button>
        </Card>
      </div>
    );
  }
  return (
    <ul className="my-4 mx-auto p-0 w-5/6 max-w-[40rem]">
      {items.map((place) => (
        <PlaceItem
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creatorId}
          coordinates={place.coordinates}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
