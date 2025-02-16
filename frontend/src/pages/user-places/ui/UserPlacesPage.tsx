import { useParams } from "react-router-dom";
import { DUMMY_PLACES } from "../lib";
import { PlaceList } from "./PlaceList";

export function UserPlacesPage() {
  const { userId } = useParams();
  const loadedPlaces = DUMMY_PLACES.filter(
    (place) => place.creatorId === userId,
  );
  return <PlaceList places={loadedPlaces} />;
}
