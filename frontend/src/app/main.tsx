import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { AppRouterProvider } from "./providers/AppRouterProvider";

import "./styles/globals.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouterProvider />
  </StrictMode>,
);
