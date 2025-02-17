import type { Meta, StoryObj } from "@storybook/react";
import { toast } from "sonner";
import { Button } from "../button";
import { Toaster } from "./Sonner";

const meta = {
  title: "shared/Sonner",
  component: Toaster,
  parameters: {
    layout: "centered",
    toaster: true,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Toaster>;

export default meta;
type Story = StoryObj<typeof Toaster>;

export const Basic: Story = {
  render: () => (
    <>
      <Button onClick={() => toast("Toast message")}>Show Toast</Button>
      <Toaster />
    </>
  ),
};

export const WithObject: Story = {
  render: () => (
    <>
      <Button
        onClick={() =>
          toast("toast message", {
            description: "toast description",
            action: {
              label: "toast action",
              onClick: () => {},
            },
          })
        }
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const Success: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.success("Success toast message")}>
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};

export const Error: Story = {
  render: () => (
    <>
      <Button onClick={() => toast.error("Error toast message")}>
        Show Toast
      </Button>
      <Toaster />
    </>
  ),
};
