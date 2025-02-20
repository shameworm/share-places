import type { Preview } from "@storybook/react";
import { customViewports } from "./custom-viewports";
import React from "react";

import { Toaster } from "../src/shared/ui/sonner";
import { AppQueryClientProvider } from "../src/app/providers";

import "../src/app/styles/globals.css";

const preview: Preview = {
  decorators: [
    (Story, { parameters }) => {
      const { toaster } = parameters;
      if (toaster) {
        return (
          <div>
            <Story />
            <Toaster position="top-center" richColors />
          </div>
        );
      }
      return <Story />;
    },
    (Story, { parameters }) => {
      const { queryClient } = parameters;
      if (queryClient) {
        return (
          <AppQueryClientProvider>
            <Story />
          </AppQueryClientProvider>
        );
      }
      return <Story />;
    },
  ],
  parameters: {
    options: {
      storySort: {
        order: ["pages", "widgets", "features", "entities", "shared", "*"],
      },
    },
    viewport: {
      viewports: {
        ...customViewports,
      },
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "dark",
      values: [
        {
          name: "dark",
          value: "#2a2a5e",
        },
      ],
    },
  },
};

export default preview;
