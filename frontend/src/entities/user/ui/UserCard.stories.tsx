import type { Meta, StoryObj } from "@storybook/react";
import { withRouter } from "storybook-addon-remix-react-router";

import { UserCard } from "./UserCard";

const meta = {
  title: "entities/UserCard",
  component: UserCard,
  argTypes: {
    id: { control: "text" },
    name: { control: "text" },
    image: { control: "text" },
    places: { control: "number" },
  },
  decorators: [withRouter],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof UserCard>;

export default meta;
type Story = StoryObj<typeof UserCard>;

export const Basic: Story = {
  args: {
    id: "u1",
    name: "John Doe",
    image: "https://github.com/shadcn.png",
    places: 5,
  },
};

export const WithoutImage: Story = {
  args: {
    id: "u1",
    name: "John Doe",
    image: "",
    places: 5,
  },
};
