import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famouts sky scrapers in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 5th Ave, New York, NY 10001",
    creatorId: "uid1",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famouts sky scrapers in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 5th Ave, New York, NY 10001",
    creatorId: "uid1",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
  {
    id: "p3",
    title: "Empire State Building",
    description: "One of the most famouts sky scrapers in the world.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg",
    address: "350 5th Ave, New York, NY 10001",
    creatorId: "uid2",
    coordinates: {
      lat: 40.748817,
      lng: -73.985428,
    },
  },
];

const UserPlaces: React.FC = () => {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId
  );
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
