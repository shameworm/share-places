import { Avatar } from "~/shared/ui/avatar";
import type { UserProperties } from "./user-properties";

import { Card, CardHeader, CardFooter, CardTitle } from "~/shared/ui/card";
import { AvatarFallback, AvatarImage } from "~/shared/ui/avatar";
import { getInitials } from "../lib";

export function UserCard({ id, name, image, places }: UserProperties) {
  const initials = getInitials(name);
  return (
    <Card key={id} className="flex items-center">
      <Avatar className="mx-4">
        {image ? (
          <AvatarImage src={image} />
        ) : (
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        )}
      </Avatar>
      <div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardFooter>
          <p>
            {places} {places === 1 ? "Place" : "Places"}
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
