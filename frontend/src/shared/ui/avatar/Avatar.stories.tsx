import type { Meta, StoryObj } from "@storybook/react";

import { Avatar, AvatarFallback, AvatarImage } from "./Avatar";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  render: () => {
    const src = "https://github.com/shadcn.png";

    return (
      <Avatar>
        <AvatarImage src={src} />
      </Avatar>
    );
  },
};

export const WithoutImage: Story = {
  render: () => {
    return (
      <Avatar>
        <AvatarFallback>CG</AvatarFallback>
      </Avatar>
    );
  },
};
