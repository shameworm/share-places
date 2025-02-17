import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouterProvider, AppQueryClientProvider } from "./providers";

import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppQueryClientProvider>
      <AppRouterProvider />
    </AppQueryClientProvider>
  </StrictMode>,
);
