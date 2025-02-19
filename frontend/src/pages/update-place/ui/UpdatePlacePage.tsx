import { useParams } from "react-router-dom";

import { UpdatePlaceForm } from "~/features/place/update";
import { Skeleton } from "~/shared/ui/skeleton";

import { useUpdatePlacePage } from "../api";

export function UpdatePlacePage() {
  const { placeId } = useParams();
  const { data, isLoading } = useUpdatePlacePage(placeId!);

  if (isLoading || !data) return <Skeleton type="page" />;
  return (
    <div className="w-full mx-auto max-w-[40rem]">
      <UpdatePlaceForm initialData={data} />
    </div>
  );
}
