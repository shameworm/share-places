import { Button } from "~/shared/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/ui/dialog";
import { DeletePlaceButtonProperties } from "./delete-place-button-properties";
import { useDeletePlaceButton } from "../api";

export function DeletePlaceButton({ id, title }: DeletePlaceButtonProperties) {
  const { deleteHandler, isDeleting } = useDeletePlaceButton();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="destructive"
          disabled={isDeleting}
          className="text-lg uppercase font-semibold"
        >
          Delete
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription />
        </DialogHeader>
        <p>You are about to delete:</p>
        <div>{title}</div>
        <DialogFooter className="*:text-lg  *:font-semibold">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              variant="destructive"
              onClick={() => {
                deleteHandler(id);
              }}
            >
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
