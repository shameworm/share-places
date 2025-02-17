import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

import { Button } from "./Button";

const meta = {
  title: "shared/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    variant: {
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "muted",
        "destructive",
        "navigation",
        "link",
      ],
      control: { type: "select" },
    },
    size: {
      options: ["small", "base", "large", "huge"],
      control: { type: "select" },
    },
  },
  args: { children: "Button", onClick: fn() },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryVariant: Story = {
  name: "Variant (default): primary",
};

export const SecondaryVariant: Story = {
  name: "Variant: secondary",
  args: {
    variant: "secondary",
  },
};

export const OutlineVariant: Story = {
  name: "Variant: outline",
  args: {
    variant: "outline",
  },
};

export const GhostVariant: Story = {
  name: "Variant: ghost",
  args: {
    variant: "ghost",
  },
};

export const DestructiveVariant: Story = {
  name: "Variant: destructive",
  args: {
    variant: "destructive",
  },
};

export const LinkVariant: Story = {
  name: "Variant: link",
  args: {
    variant: "link",
  },
};

export const SmallSize: Story = {
  name: "Size: small",
  args: {
    size: "sm",
  },
};

export const BaseSize: Story = {
  name: "Size (default): base",
};
