import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/shared/ui/card";
import { PlaceProperties } from "./place-properties";

export function PlaceCard({
  id,
  title,
  description,
  address,
  image,
  creator,
  viewMapBtn,
  deleteBtn,
  editBtn,
}: PlaceProperties) {
  return (
    <Card className="flex flex-col items-center" key={id}>
      <img
        src={image}
        alt={`${title} by ${creator}`}
        className="w-full h-full object-cover"
      />
      <CardHeader className="mx-0 text-center">
        <CardTitle>{title}</CardTitle>
        <p className="font-semibold">{address}</p>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardFooter className="flex justify-between items-center gap-2">
        {viewMapBtn}
        {deleteBtn}
        {editBtn}
      </CardFooter>
    </Card>
  );
}
