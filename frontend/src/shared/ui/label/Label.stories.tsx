import type { Meta, StoryObj } from "@storybook/react";

import { Label } from "./Label";

const meta = {
  title: "shared/Label",
  component: Label,
  parameters: {
    layout: "centered",
  },
  args: { children: "Label" },
  tags: ["autodocs"],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const Basic: Story = {};
