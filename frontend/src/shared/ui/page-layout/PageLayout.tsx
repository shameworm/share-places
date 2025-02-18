import { Suspense } from "react";

import { cn } from "~/shared/lib";

import { Skeleton } from "../skeleton";
import { Toaster } from "../sonner";
import { Separator } from "@radix-ui/react-separator";

type Properties = React.HTMLAttributes<HTMLDivElement> & {
  topBar?: React.ReactNode;
  sideBar?: React.ReactNode;
};

export function PageLayout({
  topBar = null,
  sideBar = null,
  className,
  children,
  ...properties
}: Properties) {
  return (
    <div
      className={cn(
        "container flex min-h-screen max-w-full flex-col *:py-4 *:mx-16",
        className,
      )}
      {...properties}
    >
      {topBar}
      <div className="py-0 mx-0">
        <Separator className="bg-border h-1" />
      </div>
      <div className="flex gap-4">
        {sideBar}
        <main className="w-full">
          <Suspense fallback={<Skeleton type="page" />}>{children}</Suspense>
        </main>
      </div>
      <Toaster position="top-center" />
    </div>
  );
}
