import { Avatar } from "~/shared/ui/avatar";
import type { UserProperties } from "./user-properties";

import { Card, CardHeader, CardFooter, CardTitle } from "~/shared/ui/card";
import { AvatarFallback, AvatarImage } from "~/shared/ui/avatar";
import { getInitials } from "../lib";
import { useNavigate } from "react-router-dom";

export function UserCard({ id, name, image, places }: UserProperties) {
  const navigate = useNavigate();
  const initials = getInitials(name);
  const imageUrl = `${import.meta.env.VITE_API_URL}/${image}`;

  return (
    <Card
      className="flex items-center hover:bg-primary transition hover:duration-500"
      onClick={() => navigate(`/${id}/places`)}
    >
      <Avatar className="mx-4">
        {image ? (
          <AvatarImage src={imageUrl} />
        ) : (
          <AvatarFallback className="text-2xl">{initials}</AvatarFallback>
        )}
      </Avatar>
      <div>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardFooter>
          <p className="text-md">
            Share places: <span className="font-bold">{places}</span>
          </p>
        </CardFooter>
      </div>
    </Card>
  );
}
