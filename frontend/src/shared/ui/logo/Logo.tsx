import { Link } from "react-router-dom";
import { MapPinHouse as LogoImage } from "lucide-react";
import { cn } from "~/shared/lib";
import { Separator } from "../separator";

type Properties = React.HTMLAttributes<HTMLDivElement>;

export function Logo({ className, ...properties }: Properties) {
  return (
    <Link to="/">
      <div
        className={cn("flex items-center gap-4 p-2", className)}
        {...properties}
      >
        <LogoImage className="h-8 w-8 md:h-20 md:w-20 text-accent" />
        <Separator orientation="vertical" className="h-8 md:h-20 bg-accent " />
        <div className="flex flex-col font-bold uppercase">
          <p className="text-3xl">Share</p>
          <p className="text-xl">Your Places</p>
        </div>
      </div>
    </Link>
  );
}
