import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/shared/ui/card";
import { PlaceProperties } from "./place-properties";
import { Button } from "~/shared/ui/button";
import { Map } from "lucide-react";

export function PlaceCard({
  id,
  title,
  description,
  address,
  coordinates,
  image,
  creatorId,
}: PlaceProperties) {
  console.log(coordinates, creatorId);
  return (
    <Card className="flex flex-col items-center" key={id}>
      <img src={image} alt={title} className="w-full h-full object-cover" />
      <CardHeader className="mx-0 text-center">
        <CardTitle>{title}</CardTitle>
        <p className="font-semibold">{address}</p>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center gap-2">
        <Button size="lg" variant="primary" className="font-bold">
          <p className="hidden md:block">VIEW ON MAP</p>
          <Map className="md:hidden" />
        </Button>
      </CardFooter>
    </Card>
  );
}
