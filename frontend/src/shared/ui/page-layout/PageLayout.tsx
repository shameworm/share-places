import { Suspense } from "react";

import { cn } from "~/shared/lib";

import { Skeleton } from "../skeleton";
import { Toaster } from "../sonner";

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
        "container flex min-h-screen min-w-96 max-w-full flex-col divide-y divide-muted px-4 *:py-4",
        className,
      )}
      {...properties}
    >
      {topBar}
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
