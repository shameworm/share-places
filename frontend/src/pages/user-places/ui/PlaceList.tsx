import { useParams } from "react-router-dom";

import { PlaceCard } from "~/entities/place/ui/PlaceCard";
import { MapDialog } from "~/features/place/show-map";
import { useAuthStore } from "~/features/auth";

import { Card, CardContent, CardTitle } from "~/shared/ui/card";
import { Button } from "~/shared/ui/button";

import { PlaceProperties } from "./place-propeties";
import { Link } from "react-router-dom";

export function PlaceList({ places }: { places: PlaceProperties[] }) {
  const { userId: paramsId } = useParams();
  const { userId } = useAuthStore();

  if (!places || places.length === 0) {
    return (
      <Card className="mx-auto text-center text-3xl bg-transparent max-w-[45rem] pt-4">
        <CardTitle>No places were found for the user.</CardTitle>
        {paramsId === userId && (
          <CardContent className="flex flex-col gap-2 my-4">
            <p>Maybe try creating one?</p>
            <Link to="/places/new">
              <Button
                variant="primary"
                size="lg"
                className="w-1/2 mx-auto font-semibold text-xl"
              >
                Create
              </Button>
            </Link>
          </CardContent>
        )}
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
