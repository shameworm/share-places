import { Card, CardContent, CardTitle } from "~/shared/ui/card";
import { Button } from "~/shared/ui/button";
import { Link } from "react-router-dom";

interface FallbackProps {
  isCurrentUser: boolean;
}

export function PlaceFallback({ isCurrentUser }: FallbackProps) {
  return (
    <Card className="mx-auto text-center text-3xl bg-transparent max-w-[45rem] pt-4">
      {isCurrentUser ? (
        <div>
          <CardTitle>
            It seems you haven't shared your favorite places yet.
          </CardTitle>
          <CardContent className="flex flex-col gap-2 my-4">
            <p>Maybe try creating one?</p>
            <Link to="/places/new">
              <Button
                variant="primary"
                size="lg"
                className="mt-4 mx-auto text-xl"
              >
                Create
              </Button>
            </Link>
          </CardContent>
        </div>
      ) : (
        <CardTitle>
          It seems this user hasn't shared their favorite places yet.
        </CardTitle>
      )}
    </Card>
  );
}
