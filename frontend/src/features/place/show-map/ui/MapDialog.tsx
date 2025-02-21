import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "~/shared/ui/dialog";
import PlaceMap from "./PlaceMap";
import { PlaceMapProps } from "../model";
import { Button } from "~/shared/ui/button";

export function MapDialog({ center, zoom, address }: PlaceMapProps) {
  return (
    <Dialog>
      <DialogTrigger className="px-4 py-2 rounded" asChild>
        <Button
          variant="primary"
          className="text-lg font-semibold w-full md:w-40"
        >
          View
        </Button>
      </DialogTrigger>
      <DialogContent className="gap-4">
        <DialogTitle className="text-center mt-4">{address}</DialogTitle>
        <div className="h-96">
          <PlaceMap center={center} zoom={zoom} />
        </div>
        <DialogClose asChild className="ml-auto">
          <Button variant="destructive" className="font-semibold md:w-40">
            Close
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
}
