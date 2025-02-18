import { useUserPlacesPage } from "../api";
import { PlaceList } from "./PlaceList";

import { Skeleton } from "~/shared/ui/skeleton";

export function UserPlacesPage() {
  const { data: places, isLoading } = useUserPlacesPage();
  if (isLoading) return <Skeleton type="page" />;

  return <PlaceList places={places} />;
}
