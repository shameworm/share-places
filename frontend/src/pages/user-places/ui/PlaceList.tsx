import { PlaceProperties } from "./place-propeties";
import { PlaceCard } from "~/entities/place/ui/PlaceCard";
import { MapDialog } from "~/features/place/show-map";
import { Card } from "~/shared/ui/card";

export function PlaceList({ places }: { places: PlaceProperties[] }) {
  if (!places || places.length <= 0) {
    return (
      <Card className="mx-auto text-center text-3xl bg-transparent">
        No places was found for the user.
      </Card>
    );
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
        />
      ))}
    </ul>
  );
}
