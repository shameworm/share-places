import type { Preview } from "@storybook/react";
import { customViewports } from "./custom-viewports";

import "../src/app/styles/globals.css";

const preview: Preview = {
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
