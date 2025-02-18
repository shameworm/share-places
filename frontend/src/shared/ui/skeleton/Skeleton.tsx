import { cva, VariantProps } from "class-variance-authority";

import { cn } from "~/shared/lib";

const variants = cva(
  "h-auto w-full animate-pulse p-4 opacity-20 *:min-h-4 *:rounded-md *:bg-muted",
  {
    variants: {
      type: {
        default: "space-y-4 *:w-full",
        page: "space-y-4 *:w-full [&>.first]:h-8 [&>.first]:w-2/3",
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
