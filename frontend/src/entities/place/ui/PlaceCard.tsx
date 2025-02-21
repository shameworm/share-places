import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/shared/ui/card";
import { PlaceProperties } from "./place-properties";
import { ImagesCarousel } from "~/shared/ui/carousel";

export function PlaceCard({
  id,
  title,
  description,
  address,
  images,
  creator,
  viewMapBtn,
  deleteBtn,
  editBtn,
}: PlaceProperties) {
  return (
    <Card className="flex flex-col items-center" key={id + creator}>
      <ImagesCarousel arrayOfImages={images} />
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
