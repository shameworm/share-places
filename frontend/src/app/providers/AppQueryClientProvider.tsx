import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type Properties = {
  children: ReactNode;
};

export function AppQueryClientProvider({ children }: Properties) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
