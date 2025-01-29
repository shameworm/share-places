import { cva, VariantProps } from "class-variance-authority";

import { cn } from "~/shared/lib";

const variants = cva(
  "h-auto w-full animate-pulse p-4 opacity-20 *:min-h-4 *:rounded-md *:bg-muted",
  {
    variants: {
      type: {
        default: "space-y-4 *:w-full",
        page: "space-y-4 *:w-full [&>.first]:h-8 [&>.first]:w-2/3",
        card: "flex flex-col *:w-full [&>.first]:ml-52 [&>.first]:h-8 [&>.first]:w-1/3 [&>.second]:ml-52 [&>.second]:mt-4 [&>.second]:w-1/2 [&>.third]:absolute [&>.third]:left-6 [&>.third]:top-6 [&>.third]:h-48 [&>.third]:w-48",
        custom: "[&>.first]:hidden [&>.second]:hidden [&>.third]:hidden",
      },
    },
    defaultVariants: {
      type: "default",
    },
  },
);

type Properties = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof variants>;

export function Skeleton({
  type,
  className,
  children,
  ...properties
}: Properties) {
  return (
    <div className={cn(variants({ type, className }))} {...properties}>
      {children}
      <div className="first" />
      <div className="second" />
      <div className="third" />
    </div>
  );
}
