import { useParams } from "react-router-dom";
import { useUpdatePlacePage } from "../api";
import { Skeleton } from "~/shared/ui/skeleton";

export function UpdatePlacePage() {
  const { placeId } = useParams();
  const { data, isLoading } = useUpdatePlacePage(placeId!);

  if (isLoading) return <Skeleton type="page" />;
  console.log(data);
  return <div>This is the updatePlacePage</div>;
}
