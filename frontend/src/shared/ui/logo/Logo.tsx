import { MapPinHouse as LogoImage } from "lucide-react";
import { cn } from "~/shared/lib";
import { Separator } from "../separator";

type Properties = React.HTMLAttributes<HTMLDivElement>;

export function Logo({ className, ...properties }: Properties) {
  return (
    <div
      className={cn("flex items-center gap-4 p-2", className)}
      {...properties}
    >
      <LogoImage className="h-8 w-8 md:h-20 md:w-20 text-accent" />
      <Separator orientation="vertical" className="h-8 md:h-20 bg-accent " />
      <div className="flex flex-col font-bold uppercase *:text-lg">
        <p className="md:text-3xl">Share</p>
        <p className="md-text-xl">Your Places</p>
      </div>
    </div>
  );
}
