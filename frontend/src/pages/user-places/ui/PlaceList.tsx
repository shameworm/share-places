import { useParams } from "react-router-dom";

import { PlaceCard } from "~/entities/place/ui/PlaceCard";
import { MapDialog } from "~/features/place/show-map";
import { useAuthStore } from "~/features/auth";

import { PlaceProperties } from "./place-propeties";
import { PlaceFallback } from "./PlaceFallback";
import { DeletePlaceButton } from "~/features/place/delete";

export function PlaceList({ places }: { places: PlaceProperties[] }) {
  const { userId: paramsId } = useParams();
  const { userId } = useAuthStore();

  if (!places || places.length === 0) {
    return <PlaceFallback isCurrentUser={paramsId === userId} />;
  }

  return (
    <ul className="grid grid-cols-1 gap-4 p-0 mx-auto list-none max-w-[45rem]">
      {places.map((place: PlaceProperties) => (
        <PlaceCard
          key={place.id}
          id={place.id}
          image={place.image}
          title={place.title}
          description={place.description}
          address={place.address}
          creator={place.creator}
          viewMapBtn={
            <MapDialog
              center={place.location}
              zoom={16}
              address={place.address}
            />
          }
          deleteBtn={
            paramsId === userId ? (
              <DeletePlaceButton id={place.id} title={place.title} />
            ) : null
          }
        />
      ))}
    </ul>
  );
}
