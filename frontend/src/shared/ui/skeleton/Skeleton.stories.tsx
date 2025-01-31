import type { Meta, StoryObj } from "@storybook/react";

import { Skeleton } from "./Skeleton";

const meta = {
  title: "shared/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="h-12 w-126">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
} satisfies Meta<typeof Skeleton>;

export default meta;
type Story = StoryObj<typeof Skeleton>;

export const DefaultType: Story = {};

export const PageType: Story = {
  args: {
    type: "page",
  },
};

export const CustomType: Story = {
  args: {
    type: "custom",
  },
  render: (args) => {
    return (
      <Skeleton {...args} className="flex flex-row gap-4">
        <div className="h-12 w-12" />
        <div className="h-12 w-12" />
      </Skeleton>
    );
  },
};
